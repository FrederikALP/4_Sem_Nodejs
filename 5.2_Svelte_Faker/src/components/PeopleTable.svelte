<script>
import TableRow from "./TableRow.svelte";
export let fakerList = []
</script>

<h1>People table </h1>
<TableRow fakerList = {fakerList}/>


<style>
    td {
        border: 1px;
        outline: black 1px;
        outline-width: 1px;
    }
</style>