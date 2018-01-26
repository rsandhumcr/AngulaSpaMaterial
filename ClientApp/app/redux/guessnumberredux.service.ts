import { Injectable } from '@angular/core';

export interface IGuessData {
    playersname: string;
    minvalue: number;
    maxvalue: number;
    lastguess: number;
    numberanwser: number;
    numberoftries: number;
    upperlowguess: number;
    lowerhighguess: number;
    correct: boolean;
    message: string;
}

export const INITIAL_STATE: IGuessData = {
    playersname: '',
    minvalue: 0,
    maxvalue: 0,
    lastguess: 0,
    numberanwser: 0,
    numberoftries: 0,
    upperlowguess: 0,
    lowerhighguess: 0,
    correct: false,
    message: ''
};

@Injectable()
export class GuessnumberReduxService {
    public generateGuess(oldGuessData: IGuessData, playersname: string, minvalue: number, maxvalue: number): IGuessData {

        let diff = maxvalue - minvalue;
        let newval = Object.assign({}, oldGuessData,
            {
                playersname: playersname,
                minvalue: minvalue,
                maxvalue: maxvalue,
                upperlowguess: maxvalue,
                lowerhighguess: minvalue,
                correct: false,
                numberoftries: 0,
                message: `Guess the number between ${minvalue} and ${maxvalue}`,
                numberanwser: (Math.floor((Math.random() * diff)) + minvalue)
            });
        return newval;
    }

    public processGuess(oldGuessData: IGuessData, guess: number): IGuessData {

        let numberoftries = oldGuessData.numberoftries + 1;
        let message = oldGuessData.message;
        let correct = oldGuessData.correct;
        let upperlowguess = oldGuessData.upperlowguess;
        let lowerhighguess = oldGuessData.lowerhighguess;
        if (oldGuessData.numberanwser === guess) {
            message = `${oldGuessData.playersname} has guessed ${guess} correctly in ${oldGuessData.numberoftries} tries  (min : ${oldGuessData.minvalue} , max : ${oldGuessData.maxvalue}).`;
            correct = true;
        } else if (oldGuessData.numberanwser <= guess) {
            message = `The number is lower then ${guess}`;
            if (oldGuessData.upperlowguess > guess) {
                upperlowguess = guess;
            }
        } else {
            message = `The number is higher then ${guess}`;
            if (oldGuessData.lowerhighguess < guess) {
                lowerhighguess = guess;
            }
        }
        let newval= Object.assign({}, oldGuessData,
            {
                upperlowguess: upperlowguess,
                lowerhighguess: lowerhighguess,
                correct: correct,
                numberoftries: numberoftries,
                message: message
            });
        return newval;
    }
}
