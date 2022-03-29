import express from "express";
const app = express();

//cors middleware is important to be above the content it is supposed to affect
//import cors from "cors";
//app.use(cors());

//serve the static svelte files with node/express
import path from "path";
//with this svelte public folder that has been "rolled up" is being served on port 3000
app.use(express.static(path.resolve("../client/public")));

import playersRouter from "./routers/playersRouter.js";
app.use(playersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Starting server on port:", PORT);
});