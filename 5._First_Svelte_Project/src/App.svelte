<script>
import Sun from "./components/Sun/Sun.svelte";
import Profile from "./pages/Profile/Profile.svelte";
import Tree from "./pages/Tree/Tree.svelte";

	export let name;
</script>

<main>

	<h1>Hello {name}!</h1> <!--name is taking directly from the let above unlike html-->
	<Sun />
	<p>{2 * 2}</p> <!--You can write javascript calculations in the svelte code directly-->
	<Tree /><!--Imports the page/component Tree can also manually import with this line - import Tree from "./pages/Tree/Tree.svelte"-->
	<Profile name={"Anders"}
	favoriteColor={"blue"}/>

	<Profile name={"Frederik"}
	favoriteColor={"Red"}/>
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
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>