
export interface Game {
    _id?:string;
    name:string;
    address:string;
    numberOfPeople: number;
    date:Date;
    time: string;
    fieldNumber: number;
    children?: JSX.Element|JSX.Element[];
}