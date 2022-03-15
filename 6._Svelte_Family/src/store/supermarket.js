import { writable } from "svelte/store"; //allows us to write to the store(store is where you keep your store)

export const supermarket = writable({
    apples: 60,
    tomatoes: 55,
    milk: 120,
    candy: 14
});