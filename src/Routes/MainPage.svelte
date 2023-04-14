
<script>
	import MoviesTable from "../Components/MoviesTable.svelte";
	import { cache } from "../DataBaseCache";
	import { getMovies } from '../MoviesAPI.js';
	import { getMovieGPT } from '../ChatGPTAPI.js';

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

	let description = []

	getMovieGPT()
	.then((e) => {
			console.log("chat gpt", e)
			//description=e.choices.message;
		})

</script>

<main>

	<div class="busqueda grey darken-3  opacity-85">
		<input class="white-text text-darken-2" placeholder="Pelicula" id="first_name" type="text" bind:value={filmName} on:input={handleInputFilmName} >
		<button  class="waves-effect waves-light btn grey darken-2" on:click={searchMovies} name="action">
			<i class="material-icons">search</i>
		</button>
	</div>

	<MoviesTable data={cache} movies={movies} filmName={filmName} cargando={buscando}/>
</main>

<style>
	main {
	
		
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 300;
	}
	
</style>