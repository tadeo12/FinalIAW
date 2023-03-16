
<script>
	import MoviesTable from "../Components/MoviesTable.svelte";
	import { cache } from "../DataBaseCache";
	import { getMovies } from '../MoviesAPI.js';

	let filmName = ""

	function handleInputFilmName(event) {
    	filmName = event.target.value;
  	}


	let movies = []

	let buscando = false;

	function searchMovies() {
    	buscando=true;
		movies=[];
		getMovies(filmName)
		.then((e) => {
			console.log("data movies", e)
			movies=e.results;
			buscando=false;
		})
  	}
</script>

<main>
	<div class="input-field col s6">
		<input placeholder="Pelicula" id="first_name" type="text" bind:value={filmName} on:input={handleInputFilmName} >
		<button class="btn waves-effect waves-light"  on:click={searchMovies} name="action"> Search
			<i class="material-icons right">send</i>
		</button>
	  </div>	
	<MoviesTable data={cache} movies={movies} filmName={filmName} cargando={buscando}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 300;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>