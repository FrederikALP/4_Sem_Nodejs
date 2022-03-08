import App from './App.svelte';

const app = new App({
	target: document.body,
	//props is data? short for propagation, propagate the data to other components
	//props is propagated to our App
	props: {
		//name is reactive and exported/imported to from App.svelte
		name: 'world'
	}
});

export default app;