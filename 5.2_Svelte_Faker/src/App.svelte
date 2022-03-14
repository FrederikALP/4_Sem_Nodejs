<script>
	import { faker } from '@faker-js/faker';
	export let name;
	import PeopleTable from "./components/PeopleTable.svelte";
	let fakerList = []

    faker.setLocale("nb_NO");

    function newPerson(){
        const gender = faker.name.gender(true);
        const fakePerson = {
            firstName: faker.name.firstName(gender),
            lastName: faker.name.lastName(),
            gender: gender,
            avatar: faker.image.avatar(),
            job: faker.name.jobArea()
        }
        fakerList.push(fakePerson);
    }

    for (let index = 0; index < 25; index++) {
        newPerson();
    }
</script>

<main>
	<PeopleTable fakerList = {fakerList}/>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
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