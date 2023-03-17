
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
		margin: 0;
		
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 300;
	}
	
</style>