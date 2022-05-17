import { app } from './app'
import mongoose from 'mongoose'

const port:string|undefined = process.env.PORT;

const starServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log("tumeingia na ki ding 💣");
        app.listen(port, () => console.log("tumeingia kwa mbulu at port", port))
    } catch (error) {
        console.log("Kumenuka buda, uko kwa mbulu gani?")
        console.log(error)
    }
}

starServer();

