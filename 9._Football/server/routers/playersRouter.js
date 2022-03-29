import { Router } from "express";
const router = Router();

const players = [
    { id: 1, name: "Messi" },
    { id: 2, name: "Ronaldinho" },
    { id: 3, name: "Ronaldo" }
]

router.get("/players", (req, res) => {
    res.send({ data: players });
});

export default router;