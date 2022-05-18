import { createGame, getAllGames } from '../controllers/gameController';

import { Router } from "express";

const router:Router = Router();

router.get("/api/games", getAllGames);
router.post("api/games/game", createGame)


export default router;