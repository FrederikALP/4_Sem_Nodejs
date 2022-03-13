<script>
	import Info from "../components/Info.svelte";
	import Nested from "../components/Nested.svelte";
	import Thing from "../components/Thing.svelte";
	import Inner from "../components/Inner.svelte";
	import Outer from "../components/Outer.svelte";

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

	let user = { loggedIn: false }; //by default false so it is logged out by default

	function toggle() { // toggle to show something depending on if boolean is true or false
		user.loggedIn = !user.loggedIn;
	}

	let x = 7;

	let cats = [ //array of objects containing url endings to youtube links and a name
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];

	let things = [
		{ id: 1, color: 'darkblue' },
		{ id: 2, color: 'indigo' },
		{ id: 3, color: 'deeppink' },
		{ id: 4, color: 'salmon' },
		{ id: 5, color: 'gold' }
	];

	function handleClickThree() {
		things = things.slice(1);
	}

	let m = { x: 0, y: 0 };
// handles storing the coordinates of the mouse on the screen
	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

	function handleClickFour() {
		alert('no more alerts')
	}

	function handleMessage(event) {
		alert(event.detail.text);
	}

	function handleMessageOuter(event) {
		alert(event.detail.text);
	}
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

	{#if user.loggedIn} <!--If(block/statement) true button will show Log out-->
	<button on:click={toggle}>
		Log out
	</button>
	{/if}

	{#if !user.loggedIn} <!--If(block/statement) false button will show Log in-->
		<button on:click={toggle}>
			Log in
		</button>
	{/if}

	{#if user.loggedIn} <!--Same as above but done with an else(block) statement instead of 2 if statements-->
	<button on:click={toggle}>
		Log out
	</button>
	{:else}
		<button on:click={toggle}>
			Log in
		</button>
	{/if}

	{#if x > 10} <!--if, else if, and else statement/block-->
	<p>{x} is greater than 10</p>
	{:else if 5 > x}
		<p>{x} is less than 5</p>
	{:else}
		<p>{x} is between 5 and 10</p>
	{/if}

	<h1>The Famous Cats of YouTube</h1>
	<ul>
		{#each cats as { id, name }, i} <!--Takes each cats object and puts in the id at the {id} spot and name in name and adds name after i+1-->
			<li> <!--a list-->
				<a target="_blank" href="https://www.youtube.com/watch?v={id}"> <!--target _blank means that it makes a new tab, if it would be _self then it would open in the same tab-->
					{i + 1}: {name}
				</a>
			</li>
		{/each}
	</ul>

	<button on:click={handleClickThree}>
	Remove first thing
	</button>
<!--Shows the difference to how slice is handled when a it has a key and pair value, and if it doesnt if it doesnt it will always be blue at the top and the color changes and it appears
it is taking it from the bottom and up and if it does have a key value pair it appears to be taking from the top, as the id controls the color and not the index-->
	<div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 1em">
		<div>
			<h2>Keyed</h2>
			{#each things as thing (thing.id)}
				<Thing current={thing.color}/>
			{/each}
		</div>

		<div>
			<h2>Unkeyed</h2>
			{#each things as thing}
				<Thing current={thing.color}/>
			{/each}
		</div>
	</div>

	<div on:mousemove={handleMousemove}> <!--Shows the mouse position in the when the mouse is inside the div-->
		The mouse position is {m.x} x {m.y}
	</div>
<!--Does the same but handles it inline instead of calculating it in the script-->
	<div on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
		The mouse position is {m.x} x {m.y}
	</div>

	<button on:click|once={handleClickFour}> <!--On click but only once per refresh will it give an error-->
		Click me
	</button>

	<Inner on:message={handleMessage}/> <!--Calls the component to do the function handleMessage. Is an alert handler almost entirely made from a component then propagated into App.svelte I believe-->

	<Outer on:message={handleMessageOuter}/> <!--Same as above, but the Inner component has been imported to another component, the outer component and is being called through that-->
</main>

<style>
	div { 
		width: 100%; 
		height: 100%; 
	}

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