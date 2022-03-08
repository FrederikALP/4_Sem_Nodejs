<script>
import Apple from "./Apple.svelte";

const apples = ["green apple", "orange apple", "red apple"];

/*function pickApple(farmerName) {
    console.log("grab grab", farmerName);
}*/

function pickApple() {
    apples.pop();
    apples = apples;
}

</script>
<div id="tree">
<h2>Im a tree</h2>


    <!--looping through components-->
    {#each apples as apple}
    <Apple appleEmoji={apple} />
    {/each}

    <p>Seperator between examples</p>
    <!--You can write data inside the apple tag, what you write inside is the child
     if there is nothing you do a self closing tag <Apple />
    <Apple>Child</Apple> open tag -->
<Apple appleEmoji={apples[0]} />
<Apple appleEmoji={apples[1]} />
<!--There are 3 ways to interact with button normally without svelte-->
<!--in svelte you wrap in a lambda for it to be called later-->
<button on:click={() => console.log("grab grab")}>pick an apple</button>
<!--Through the function pickApple 
    if written with () it gets evaluated as the page is loaded and not when the button is clicked-->
<button on:click={() => pickApple("Farmer Frederik")}>pick an apple fuction</button>
</div>
<div id="trunk"></div>

<style>
    #tree{
        background-color: green;
    }
</style>