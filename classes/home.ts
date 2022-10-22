import { School } from "../interfaces/school";

export class Home implements School {
    constructor(num:string){
        console.log(num);
        
    }

    number1 = 45;
    number2 = 55;

    getSum(): number {
       return this.number1+ this.number2
    }


    public name1: number;
    public name2:number;

    Add() {
        return this.name1 + this.name2;
    }

    
    
}