<script>
    import { link } from "svelte-routing";
    export let data;
    
  

</script>
<div class="row">
    <div class="col s12 m7">
      <div class="card">
        
          {#if data && data.backdrop_path}
            <div class="card-image">
              <img src= {"https://image.tmdb.org/t/p/w500"+data.backdrop_path}>
              <span class="card-title">{data.original_title}</span>
            </div>
          {:else}
            <span class="card-title">{data.original_title}</span>
          {/if}
    
        <div class="card-content">
          <p>{data.overview}</p>
        </div>
        <div class="card-action">
          <a href="/reviewsTable/{data.id}/{data.original_title}" replace>Mirar opiniones</a>
        </div>
      </div>
    </div>
</div>