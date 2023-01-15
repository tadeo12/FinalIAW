<script>
	import NewReview from "./Components/NewReview.svelte";
	export let name;
</script>

<main>
	<h1>Reviews {name} </h1>
	<NewReview>

	</NewReview>
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