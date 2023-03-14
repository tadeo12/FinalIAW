
<script>
	import NewReview from "../Components/NewReview.svelte";
	import ReviewsTable from "../Components/ReviewsTable.svelte";
	import { cache } from "../DataBaseCache";
	import { getMovies } from '../MoviesAPI.js';

	let filmName = "Harry Potter"

	function handleInputFilmName(event) {
    	filmName = event.target.value;
  	}


	let movies = []

	function searchMovies() {
    	
		getMovies(filmName)
		.then((e) => {
			console.log("data movies", e)
			movies=e.results;
		});
  	}
</script>

<main>
	<div class="input-field col s6">
		<input placeholder="Pelicula" id="first_name" type="text" bind:value={filmName} on:input={handleInputFilmName} >
		<button class="btn waves-effect waves-light" type="submit" on:click={searchMovies} name="action">Submit
			<i class="material-icons right">send</i>
		</button>
	  </div>	
	<NewReview data={cache} filmName={filmName}/>
	<ReviewsTable data={cache} movies={movies} filmName={filmName}/>
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