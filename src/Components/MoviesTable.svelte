<script>
    import Movie from "./CardMovie.svelte";
    import  {cache}  from "../DataBaseCache";  
    import { getMovies } from '../MoviesAPI.js';
    
    let reviews = []

    export let filmName;
    export let movies;

    cache.subscribe((value) => (reviews = value));

    cache.subscribe(val => reviews= val)

</script>

<main>

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
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        grid-gap: 1em;
        padding-top: 1em;
        margin: auto;

        /* display:flex;
        justify-content:left;
		    flex-wrap:wrap;
        padding-top: 1em;
        margin: auto; */
    }
</style>