<script>
	import { Router, Link, Route } from "svelte-navigator";
	import About from "./pages/About/About.svelte";
	import Home from "./pages/Home/Home.svelte";
</script>

<main>

</main>

<!--In most cases it makes sense to only have one router-->
<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
	</nav>

	<Route path="/about" component={About} />
	<Route path="/" component={Home} />
</Router>


<!--If there is no style in App.svelte it will create an error that says no css is in bundle.css-->
<style>
	nav {
		width: 100%;
	}
</style>