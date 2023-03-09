<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


<script>
	import { Router, Link, Route } from "svelte-routing";
	import Main from './Routes/MainPage.svelte';
	import Ejemplo from './Routes/EjemploPage.svelte';
	import NavBar from "./Components/NavBar.svelte";
	
</script>

<main>	
	<Router>
		<NavBar></NavBar>
		<div>
			<Route path="/">
				<Main></Main>
			</Route>
			<Route path="/ejemplo">
				<Ejemplo></Ejemplo>
			</Route>
			
		</div>
	</Router>
</main>

<style>

</style>