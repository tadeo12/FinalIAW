<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


<script>
	import { Router, Link, Route } from "svelte-routing";
	import Main from './Routes/MainPage.svelte';
	import NavBar from "./Components/NavBar.svelte";
	import ReviewsTable from "./Routes/ReviewsTable.svelte";
	import Background from "./Components/Background.svelte";
	
</script>

<main>	
	<Router>
		<Background/>
		<NavBar></NavBar>
		<div>
			<Route path="/">
				<Main filmNameRoute=""/>
			</Route>
			<Route path="/home">
				<Main filmNameRoute=""/>
			</Route>
			<Route path="/movies/:filmname/"  let:params>
				<Main filmNameRoute={params.filmname}/>
			</Route>
			<Route path="/reviewsTable/:id/:filmName/:data" let:params>
				<ReviewsTable movieID={params.id} filmName={params.filmName} movie={JSON.parse(decodeURIComponent(params.data))}/>
			</Route>
			
			
		</div>
	</Router>
</main>

<style>

</style>