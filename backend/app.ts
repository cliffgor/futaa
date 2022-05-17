import "dotenv/config"

import express, { Application, Request, Response } from 'express';

import cors from 'cors';

const app:Application = express()
app.use(express.json())


// We will import our Routes here


// We will declare our routes here
app.get("/", (req: Request, res:Response) => {
    res.send( {message: "Simple boy"} )
})

export {app}
