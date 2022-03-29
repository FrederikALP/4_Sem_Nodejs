//name is generalStore because of the idea that it holds all sorts of general values or content

import { readable } from "svelte/store";

export const baseURL = readable("http://localhost:3000")