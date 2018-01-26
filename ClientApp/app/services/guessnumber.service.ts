
import { Injectable } from '@angular/core';

export class GuessData {
    playersname: string;
    lastguess: number;
    numberanwser: number;
    numberoftries: number;
    upperlowguess: number;
    lowerhighguess: number;
    correct: boolean;
    message: string;
}

@Injectable()
export class GuessnumberService {

    private playersname: string;
    private minvalue: number;
    private maxvalue: number;
    private message: string = '';
    private lastguess: number = 0;
    private numberanwser: number = 0;
    private numberoftries: number = 0;
    private upperlowguess: number = 0;
    private lowerhighguess: number = 0;
    private correct: boolean = false;


    public generateGuess(playersname: string, minvalue: number, maxvalue: number): GuessData {
        this.playersname = playersname;
        this.minvalue = minvalue;
        this.maxvalue = maxvalue;
        this.upperlowguess = this.maxvalue;
        this.lowerhighguess = this.minvalue;
        this.correct = false;
        this.numberoftries = 0;
        this.message = `Guess the number between ${this.minvalue} and ${this.maxvalue}`;
        let diff = this.maxvalue - this.minvalue;
        this.numberanwser = Math.floor((Math.random() * diff)) + this.minvalue;
        return this.generateRespnoseData();
    }

    public processGuess(guess: number): GuessData {

        this.numberoftries++;
        if (this.numberanwser === guess) {
            this.message = `${this.playersname} has guessed ${guess} correctly in ${this.numberoftries} tries  (min : ${this.minvalue} , max : ${this.maxvalue}).`;
            this.correct = true;
        } else if (this.numberanwser <= guess) {
            this.message = `The number is lower then ${guess}`;
            if (this.upperlowguess > guess) {
                this.upperlowguess = guess;
            }
        } else {
            this.message = `The number is higher then ${guess}`;
            if (this.lowerhighguess < guess) {
                this.lowerhighguess = guess;
            }
        }
        return this.generateRespnoseData();
    }

    private generateRespnoseData() {
        let guessData = new GuessData();
        guessData.playersname = this.playersname;
        guessData.lastguess = this.lastguess;
        guessData.numberanwser = this.numberanwser;
        guessData.numberoftries = this.numberoftries;
        guessData.upperlowguess = this.upperlowguess;
        guessData.lowerhighguess = this.lowerhighguess;
        guessData.correct = this.correct;
        guessData.message = this.message;
        return guessData;
    }
}