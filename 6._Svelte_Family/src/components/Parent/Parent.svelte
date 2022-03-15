<script>
    export let name;
    export let handleFamilyMeetingCall;
</script>

<h2 class="parent" on:click={handleFamilyMeetingCall(name)}>Hi I am a Svelte parent named {name}.</h2>

<style>
    .parent {
        user-select: none;
    }
</style>