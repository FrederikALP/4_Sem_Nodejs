<script>
    import TableHead from "./TableHead.svelte";
    export let fakerList = []
    console.log(fakerList);
</script>

<table>
<TableHead/>
<tbody>
  {#each fakerList as fakePerson}
<tr>
<td>{fakePerson.firstName} {fakePerson.lastName}</td>
<td>{fakePerson.gender}</td>
<td>{fakePerson.job}</td>
</tr>
{/each}
</tbody>
</table>


<style>
    table, th, td {
  		border: 1px solid black;
	}
</style>