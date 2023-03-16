<script>
    import { link } from "svelte-routing";
    export let data;
    
    const urlImagen= data && data.backdrop_path ? "https://image.tmdb.org/t/p/w500"+data.backdrop_path : null;

</script>
<div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={urlImagen}>
          <span class="card-title">{data.original_title}</span>
        </div>
        <div class="card-content">
          <p>{data.overview}</p>
        </div>
        <div class="card-action">
          <a href="/reviewsTable/{data.id}/{data.original_title}" replace>Mirar opiniones</a>
        </div>
      </div>
    </div>
</div>