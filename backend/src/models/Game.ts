import { Schema, model } from 'mongoose'

export interface Game {
    name:string;
    address: string;
    numberOfPeople: number;
    date: Date;
    time: string;
    fieldNumber: Number
}

const GamesSchema = new Schema<Game>({
    name: {type:String, required:true},
    address: {type: String, required: true},
    numberOfPeople: {type: Number, required:true},
    date: {type: Date, required:true},
    fieldNumber: {type: Number, required:true}
})


export default model<Game>('Game', GamesSchema)

// What is an Interface
// In TypeScript, an interface is an abstract type that 
// tells the compiler which property names a given object can have. 
// TypeScript creates implicit interfaces when you define an object with properties. 
// It starts by looking at the object's property name and data type using TypeScript's type inference abilities.