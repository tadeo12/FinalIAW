<script>

    export let data;
    
</script>
<div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="https://image.tmdb.org/t/p/w500{data.backdrop_path}">
          <span class="card-title">{data.original_title}</span>
        </div>
        <div class="card-content">
          <p>{data.overview}</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
</div>