<script>
	import Info from "../components/Info.svelte";
	import Nested from "../components/Nested.svelte";

	export let name; //first exercise tells us to make a let called name, but name is already defined in main.js under props
	let src = './tutorial/image.gif';
	let gname = 'Rick Astley';
	let string = `this string contains some <strong>HTML!!!</strong>`;
	let count = 0;
	let countTwo = 1;

	//reactive statements example that builds onto reactive assignments
	$: if (count >= 10) { //this statement is rerun whenever count is changed and is activated when it hits 10
		alert(`count is dangerously high!`); //when clicked and the count is at 9 an alert will pop up in the broweser
		count = 9; //this puts the count back to 9 instead of 10, stops the count from going above 9
	}

	function handleClick() { //function that adds +1 to count if button is clicked
	count += 1;
	}

	// the `$:` means 're-run whenever these values change'
	$: doubled = countTwo * 2;
	$: quadrupled = doubled * 2;

	function handleClickTwo() {
		countTwo += 1;
	}

	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};

</script>

<main>
	<h1>Hello {name}!</h1> <!--examples suggest to put .toUpperCase() which is kind of pointless as the prebuilt styling has text-transform: uppercase;-->
	<img {src} alt="{gname} dancing"><br>
	<button on:click={handleClick}>
		Clicked {count} {count === 1 ? 'time' : 'times'} <!--If clicked once only and it shows 1 it will show "time" if not it shows "times"-->
	</button>
	<p>This is a paragraph.</p> <!--Styling being done by the p tag in styling, if you want individual styling for p tags, then give it a class or id and give that styling different to the p tags styling-->
	<p>{@html string}</p> <!--The @html makes the <strong> tag not be escaped and makes the HTML!!! if you use this tag it is important that you escape HTML to protect against XSS attacks-->
	<button on:click={handleClickTwo}>
		Count: {countTwo}
	</button>
	<p>{countTwo} * 2 = {doubled}</p>
	<p>{doubled} * 2 = {quadrupled}</p>

	<Nested answer={42}/> <!--The point is to show the style for this has to be done within Nested.svelte file. With the answer assignment we give answer a different value than the below statement-->
	<Nested/> <!--This statements takes the default value of Nested.svelte, which is a mystery, unlike the above statement where it is altered-->
	<Info {...pkg}/><!--Spread operator has been used to assign properties in a component which is being done here-->
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

	p {
		color: #416088;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; /* Comic sans is not very pretty */
		font-size: 2em;
	}
</style>