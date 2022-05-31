## Futaa
- Futaa is a React and Typescript application which is connected to a node backend that displays football Matches happening around a specific location the time, number of people and the field which the game is going to be played.

## Author
 - Cliff Gor

## Tech used
 - React
 - Typescript
 - MongoDB
 - dotenv
 - Express
 - Node Js
 - Mongoose

## Installation
 To install this application you need to have Node Js installed on your computer

 To install node modules you need to change to the respective directory

 ``` bash
 cd frontend
 ```

 and

 ``` bash
 cd backend
 ```

 after going into the respective directory install your node modules by using this command

 ``` bash
npm install
 ```

 This would install node modules into your project

 You also need to add your .env in the root folder of your backend to work

 ``` javascript

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
```

