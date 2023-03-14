<script>
    import Review from "./Review.svelte";
    import Movie from "./CardMovie.svelte";
    import { getMoviesReviews } from '../DataBaseAPI.js';
    import  {cache}  from "../DataBaseCache";  
    import { getMovies } from '../MoviesAPI.js';

    let reviews = []

    export let filmName;

    cache.subscribe((value) => (reviews = value));

    cache.subscribe(val => reviews= val)
    getMoviesReviews()
    .then((e) => {
        console.log("data", e.records)
        cache.set(e.records)
    });


    let movies = []

    getMovies()
    .then((e) => {
        console.log("data movies", e)
        movies=e.results;
    });

    
</script>

<main>

    {#each reviews as review}
        {#if review.fields.movie_name.includes(filmName)}
            <Review data={review.fields} style="primary"></Review>
        {/if}
    {:else}
        <div class="progress">
            <div class="indeterminate"></div>
        </div>
    {/each}

    {#each movies as movie}
        <Movie data={movie} style="primary"></Movie>
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