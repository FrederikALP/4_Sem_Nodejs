<script>
    export let name;
    export let isGirl = false;
    export let stereotype = "";
    export let handleFamilyMeetingCall;
    import { supermarket } from "../../store/supermarket.js";

    function eatCandy() {
        supermarket.update(storeValue => {
            if (storeValue.candy > 0) storeValue.candy -= 1;
            return storeValue;
        });
        //$supermarket.candy--;
    }
</script>

<div class:girly={isGirl} 
    class={stereotype || "beyond-any-stereotype"}>
    <h3 class="child" on:click|preventDefault={handleFamilyMeetingCall(name)}>Hi, I am the child named {name}</h3>
    
    <div>Pieces of candy in the store: {$supermarket.candy}</div>
</div>
<button on:click = {eatCandy}>Eat candy</button>

<style>
    .girly {
        background-color: blueviolet;
    }
    .black-sheep {
        background-color: black;
        color: white;
    }
    .bright-kid {
        background-color: brown;
        color: rgb(248, 0, 0);
    }
    .child {
        user-select: none;
    }
</style>