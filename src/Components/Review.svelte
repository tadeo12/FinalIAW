<script>
    import CardHeader from "./CardHeader.svelte";
    import { createEventDispatcher } from 'svelte';

    export let data;
    export let reviewID;
    


    export let style="dark";

    console.log("DATA: "+data);

    const dispatch = createEventDispatcher();


    function handleClick() {
    const confirmar = confirm('¿Estás seguro que deseas eliminar esta opinión?');
       
        if (confirmar) {
            dispatch('deleteReview', reviewID);
        }
  }

</script>

<main>
    <div class="card border-{style} mb-3" style="max-width: 18rem;">
        <div id="ch" class="card-header">
            <CardHeader estrellas={data.score} ></CardHeader>
            <!-- Modal Trigger -->
            <button class="btn modal-trigger red lighten-1 " on:click={handleClick} data-target="modal1">
                <i class="material-icons">close</i> 
            </button>
        </div>
        <div class="card-body text{style==="light"?"":"-"+style}">
            <h5 class="card-title">{data.movie_name}</h5>
            <p class="card-text">{data.review}</p>
        </div>
    </div>
</main>

<style>
    #ch{
        display: flex;
        justify-content: space-between; /* Alinea los elementos al principio y final del contenedor */
        padding: 10px;
    }
    main{
        margin: auto;
    }
</style>