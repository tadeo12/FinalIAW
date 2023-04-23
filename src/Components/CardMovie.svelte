<script>
    import { fade } from "svelte/transition";

    export let data;
    
    let essentialdFilmData = {  original_title: data.original_title, 
                                vote_average: data.vote_average, 
                                release_date: data.release_date,
                                overview: data.overview 
                              };

    let encodeFilmData = encodeURIComponent(JSON.stringify(essentialdFilmData))
    

</script>
<div class="row" transition:fade>
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
    
        <div class="card-content card-movie">
          <p>{data.overview}</p>
        </div>
        <div class="card-action">
          <a href="/reviewsTable/{data.id}/{data.original_title}/{encodeFilmData}" class="light-blue-text" replace>Mirar opiniones</a>
        </div>
      </div>
    </div>
</div>

