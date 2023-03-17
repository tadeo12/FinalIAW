<script>
    import Review from "../Components/Review.svelte";
  
    import { getMovieReviews } from '../DataBaseAPI.js';
    import  {cache}  from "../DataBaseCache";  
    import { getMovieGPT } from '../ChatGPTAPI.js';
   
    import NewReview from "../Components/NewReview.svelte";

    let reviews = []

    export let filmName;
    export let movieID;
    let cargando = true;

    cache.subscribe((value) => (reviews = value));

    cache.subscribe(val => reviews= val)
    getMovieReviews(movieID)
    .then((e) => {
        console.log("data", e.records)
        cache.set(e.records)
        cargando= false;
    });
   
    let chatGPTdescription = []

	getMovieGPT(filmName)
	.then((e) => {
			console.log("chat gpt", e)
			chatGPTdescription[0]=e.choices[0].message.content;
		})

</script>

<main>


    <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{filmName}</span>
                {#each chatGPTdescription as chatAnswer}
                    {chatAnswer}
                {:else}
                    <div class="progress">
                        <div class="indeterminate"></div>
                    </div>
                {/each}
            </div>
          </div>
        </div>
      </div>

    

    <NewReview data={cache} movie_id={movieID} filmName={filmName}/>

    {#each reviews as review}
        <Review data={review.fields} style="primary"></Review>
    {:else}
        {#if cargando}
            <div class="progress">
                <div class="indeterminate"></div>
            </div>
        {:else}
            
                <div class="card amber darken-2" style="margin: auto;">
                    <div class="card-content white-text">
                        <span class="card-title">Sin opiniones</span>
                        <p>Todavia no has guardado ninguna opinion de esta pelicula</p>
                    </div>
                </div>
              
        {/if}
    {/each}


</main>

<style>
    main{
        display:flex;
        justify-content:left;
		    flex-wrap:wrap;
        padding-top: 1em;
        margin: auto;
    }
</style>