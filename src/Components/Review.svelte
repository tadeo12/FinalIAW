<script>
    import CardHeader from "./CardHeader.svelte";

    export let data;
    
    export let style="dark";
</script>

<main>
    <div class="card border-{style} mb-3" style="max-width: 18rem;">
        <div class="card-header"><CardHeader estrellas={data.score} ></CardHeader></div>
        <div class="card-body text{style==="light"?"":"-"+style}">
            <h5 class="card-title">{data.movie_name}</h5>
            <p class="card-text">{data.review}</p>
        </div>
    </div>
</main>

<style>
    main{
        margin: auto;
    }
</style>