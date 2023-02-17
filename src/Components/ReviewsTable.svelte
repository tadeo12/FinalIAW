<script>
    import Review from "./Review.svelte";
    import { getMoviesReviews } from '../DataBaseAPI.js';

    let reviews = []
    getMoviesReviews()
    .then((e) => {
        console.log("data", e.records)
        reviews = e.records;
    });

</script>

<main>

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