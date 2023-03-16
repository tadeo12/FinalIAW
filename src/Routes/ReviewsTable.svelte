<script>
    import Review from "../Components/Review.svelte";
    import Movie from "../Components/CardMovie.svelte";
    import { getMovieReviews } from '../DataBaseAPI.js';
    import  {cache}  from "../DataBaseCache";  
    import { getMovies } from '../MoviesAPI.js';
    import NewReview from "../Components/NewReview.svelte";

    let reviews = []

    export let filmName;
    export let movieID;
    export let movies;

    cache.subscribe((value) => (reviews = value));

    cache.subscribe(val => reviews= val)
    getMovieReviews(movieID)
    .then((e) => {
        console.log("data", e.records)
        cache.set(e.records)
    });
    
</script>

<main>

    <NewReview data={cache} movie_id={movieID} filmName={filmName}/>

    {#each reviews as review}
        <Review data={review.fields} style="primary"></Review>
    {:else}
        <div class="progress">
            <div class="indeterminate"></div>
        </div>
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