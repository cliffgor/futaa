import { Request, Response} from 'express';
import Game from '../models/Game';

const getAllGames = async (req: Request, res: Response) => {
    const games = await Game.find();
    try {
        return res.status(200).json(games);
    }
}