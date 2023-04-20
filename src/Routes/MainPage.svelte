
<script>
	import MoviesTable from "../Components/MoviesTable.svelte";
	import { cache } from "../DataBaseCache";
	import { getMovies } from '../MoviesAPI.js';
	import { discoverMovies } from '../MoviesAPI.js';
	import { getMovieGPT } from '../ChatGPTAPI.js';

	import { onMount } from 'svelte';

	import { navigate  } from "svelte-routing";

	export let filmNameRoute;

	let filmName = ""

	onMount(() => {
		console.log("film name route: ",filmNameRoute);

		console.log("On mount")
    	if(filmNameRoute==""){
			console.log("Entro en el if")
			discover()
		}else{
			console.log("Entro en el else")
			filmName=filmNameRoute
			searchMovies("Harry potter")
		}
  	});

	function redirectToMovieSearch() {
    	navigate("/movies/"+filmName+"/")
  	}

	function handleInputFilmName(event) {
    	filmName = event.target.value;
  	}


	let movies = []

	let buscando = false;

	function searchMovies() {
    	buscando=true;
		movies=[];
		redirectToMovieSearch();
		getMovies(filmName)
		.then((e) => {
			console.log("data movies", e)
			movies=e.results;
			buscando=false;
		})
  	}

	  function discover() {
    	buscando=true;
		movies=[];
		discoverMovies()
		.then((e) => {
			console.log("data discovered movies", e)
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

	
		<form class="busqueda grey darken-3  opacity-85" on:submit|preventDefault={() => searchMovies() }>
			<label for="">
				<input class="white-text text-darken-2" placeholder="Pelicula" id="first_name" type="text" bind:value={filmName} on:input={handleInputFilmName} >
			</label>
			<button  class="waves-effect waves-light btn grey darken-2" name="action">
				<i class="material-icons">search</i>
			</button>
		</form>
	
	<MoviesTable data={cache} movies={movies} filmName={filmName} cargando={buscando}/>
</main>

<style>
	.busqueda {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
  	}

	.busqueda label {
		width: 100%;
		flex: 1;
		margin-right: 10px;
	}
	
</style>