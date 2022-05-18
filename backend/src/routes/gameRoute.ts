import { createGame, getAllGames } from '../controllers/gameController';

import { Router } from "express";

const router:Router = Router();

router.get("/", getAllGames);
router.post("/game", createGame)


export default router;