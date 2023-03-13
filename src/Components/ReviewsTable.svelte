<script>
    import Review from "./Review.svelte";
    import { getMoviesReviews } from '../DataBaseAPI.js';
    import  {cache}  from "../DataBaseCache";  

    let reviews = []

    export let filmName;

    cache.subscribe((value) => (reviews = value));

    cache.subscribe(val => reviews= val)
    getMoviesReviews()
    .then((e) => {
        console.log("data", e.records)
        cache.set(e.records)
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