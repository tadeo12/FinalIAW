<script>
    import Review from "../Components/Review.svelte";
  
    import {getMovieReviews} from '../DataBaseAPI.js';
    import  {cache}  from "../DataBaseCache";  
    import {deleteMovieReview} from "../DataBaseAPI"
    import MainReview from "../Components/MainReview.svelte"
    import NewReview from "../Components/NewReview.svelte";

    let reviews = []

    export let movie;
    export let filmName;
    export let movieID;
    let cargando = true;

    cache.subscribe((value) => (reviews = value));

    cache.subscribe(val => reviews= val)

    updateReviewsFromDatabase();

    function deleteReview(id) {
        deleteMovieReview(id)
        .finally(
            ()=>{
                reviews = reviews.filter(review => review.id !== id)
                updateReviewsFromDatabase();
            }
        )
        
    }

    function updateReviewsFromDatabase(){
        getMovieReviews(movieID)
            .then((e) => {
            console.log("A: "+e.records)
            cache.set(e.records)
            cargando= false;
         });
    }
        
</script>

<main>

    <MainReview filmName={filmName} data={movie}/>
    
    <div class="divider"></div>

    <NewReview data={cache} movie_id={movieID} filmName={filmName} on:new-review={updateReviewsFromDatabase}/>
    
    <div class="divider"></div>
   
    <div id="grilla" class="row">
        {#each reviews as review}
            <Review data={review.fields} on:deleteReview={(e)=>deleteReview(e.detail)} reviewID={review.id} style="primary" ></Review>
        {:else}
            {#if cargando}
                <div class="progress">
                    <div class="indeterminate"></div>
                </div>
            {:else}
                
                    <div class="card red darken-4 opacity-85" style="margin: auto; max-width:500px;">
                        <div class="card-content white-text">
                            <span class="card-title">Sin opiniones</span>
                            <p>Todavia no se ha guardado ninguna opinion de esta pelicula</p>
                        </div>
                    </div>
                
            {/if}
        {/each}
    </div>


</main>


<style>

    .divider{
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .grilla{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 1em;
        padding-top: 1em;
        margin: 0;
    
    }
</style>