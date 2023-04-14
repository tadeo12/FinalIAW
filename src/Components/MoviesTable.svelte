<script>
    import Movie from "./CardMovie.svelte";
    
    export let filmName;
    export let movies;

    export let cargando;

</script>

<main>

    {#each movies as movie}
        <Movie data={movie} style="primary" ></Movie>
    {:else}
        {#if cargando}
            <div class="progress">
                <div class="indeterminate"></div>
            </div>
        {:else} 
                <div/>
                <div class="card red darken-4 opacity-85" style='margin: auto;'>
                    <div class="card-content white-text">
                        <span class="card-title">Sin resultados</span>
                        <p>Lo siento, no se encontraron peliculas con la busqueda actual.</p>
                    </div>
                </div>
              
        {/if}
    {/each}

</main>

<style>
    main{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 1em;
        padding-top: 1em;
        margin: 0;
    }

    @media (min-width: 768px) {
        main {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }
    
</style>