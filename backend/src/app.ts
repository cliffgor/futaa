import "dotenv/config"

import express, { Application, Request, Response } from 'express';

import cors from 'cors';
import gameRoute from './routes/gameRoute'

const app:Application = express()
app.use(express.json())


// We will import our Routes here


// We will declare our routes here
app.use("/api/games", gameRoute);
export {app}
