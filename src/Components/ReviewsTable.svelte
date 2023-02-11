<script>
    import Review from "./Review.svelte";
    import { data } from "../DataBaseSimulator";

    let reviews;
    data.subscribe(val => reviews= val)
</script>

<main>
    <a class="waves-effect waves-light btn">button</a>
    {#each reviews as review}
        <Review data={review} style="primary"></Review>
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