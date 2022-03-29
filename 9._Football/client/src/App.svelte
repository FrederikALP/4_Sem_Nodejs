<script>
	import { onMount } from "svelte";
	import { baseURL } from "./store/generalStore";

	let players;
	
	onMount(async () => {
		//fetching from the server side localhost 3000
		const response  = await fetch($baseURL + "/players");
		//pulling the key value out of the data by the keyname (destructuring)
		const { data:playersArray } = await response.json();
		players = playersArray;
	});
</script>

<main>
	<!--It is not correct to display players with stringify, usually it should be looped through with components-->
	<h1>{JSON.stringify(players)}</h1>
</main>
<footer>
	{new Date().getFullYear()} Copyright bla bla
	About
	Contact
</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		min-height: calc(100vh - 3.9em);
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	footer {
		background-color: aqua;
	}
</style>