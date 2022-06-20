import "dotenv/config"

import express, { Application, Request, Response } from 'express';

import cors from 'cors';
import gameRoute from './routes/gameRoute'

// We will import our Routes here


const app:Application = express()
app.use(express.json())
app.use(cors())





// We will declare our routes here
app.use("/api/games", gameRoute);
export {app}
