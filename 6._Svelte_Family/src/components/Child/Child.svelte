<script>
    export let name;
    export let isGirl = false;
    export let stereotype = "";
    export let handleFamilyMeetingCall;
</script>

<div class:girly={isGirl} 
    class={stereotype || "beyond-any-stereotype"}>
    <h3 class="child" on:click|preventDefault={handleFamilyMeetingCall(name)}>Hi, I am the child named {name}</h3>
</div>

<style>
    div{
        background-color: rgb(14, 47, 212);
    }
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