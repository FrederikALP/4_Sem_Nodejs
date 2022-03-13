import App from './App.svelte';
import fakedPerson from "./faker.js"

const app = new App({
	target: document.body,
	props: {
		faker: fakedPerson
	}
});

export default app;