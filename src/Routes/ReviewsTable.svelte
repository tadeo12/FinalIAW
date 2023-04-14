<script>
    import Review from "../Components/Review.svelte";
  
    import {getMovieReviews} from '../DataBaseAPI.js';
    import  {cache}  from "../DataBaseCache";  
    import {deleteMovieReview} from "../DataBaseAPI"
    import MainReview from "../Components/MainReview.svelte"
    import NewReview from "../Components/NewReview.svelte";

    let reviews = []

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

    <MainReview filmName={filmName}/>
    
    <div class="section">
        <NewReview data={cache} movie_id={movieID} filmName={filmName} on:new-review={updateReviewsFromDatabase}/>
    </div>
    <div class="divider"></div>
    <div id="grilla" class="section">
        {#each reviews as review}
            
            <Review data={review.fields} on:deleteReview={(e)=>deleteReview(e.detail)} reviewID={review.id} style="primary" ></Review>
        {:else}
            {#if cargando}
                <div class="progress">
                    <div class="indeterminate"></div>
                </div>
            {:else}
                
                    <div class="card red accent-1" style="margin: auto; max-width:500px;">
                        <div class="card-content white-text">
                            <span class="card-title">Sin opiniones</span>
                            <p>Todavia no has guardado ninguna opinion de esta pelicula</p>
                        </div>
                    </div>
                
            {/if}
        {/each}
    </div>


</main>


<style>
    #grilla{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 1em;
        padding-top: 1em;
        margin: 0;
    
    }
</style>