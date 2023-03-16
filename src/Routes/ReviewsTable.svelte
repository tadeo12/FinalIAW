<script>
    import Review from "../Components/Review.svelte";
  
    import { getMovieReviews } from '../DataBaseAPI.js';
    import  {cache}  from "../DataBaseCache";  
   
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
   

</script>

<main>

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