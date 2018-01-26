import { Component } from '@angular/core';
import { GuessnumberService, GuessData } from '../../services/guessnumber.service';
import { GuessgeneratorVillainData } from './guessgeneratorvillain/guessgeneratorvillain.component';

@Component({
    selector: 'app-guessnumbervillain',
    templateUrl: './guessnumbervillain.component.html',
    styleUrls: ['./guessnumbervillain.component.css'],
    providers: [GuessnumberService]
})

export class GuessnumberVillainComponent {

    public guessData: GuessData;
    public guess: string = '0';
    public playing: boolean = false;
    public techicon: string = 'dist/img/bootstrapicon.png';
    private minvalue: number = 0;
    private maxvalue: number = 100;
    private statusindex: number=0;
    constructor(private guessnumberService: GuessnumberService)  {
    }

    public processentry($event: GuessgeneratorVillainData) {
        this.playing = true;
        this.minvalue = Number($event.minvalue);
        this.maxvalue = Number($event.maxvalue);
        this.guessData = this.guessnumberService.generateGuess($event.username, this.minvalue, this.maxvalue);
        this.statusindex =0;
    }

    public processguess($event: number) {
        this.guessData = this.guessnumberService.processGuess(Number($event));
        if (this.guessData.correct) {
            this.playing = false;
        }
        this.statusindex++;
        if (this.statusindex > 2)
            this.statusindex = 0;
    }

    public statuschanger() {
        return "status" + this.statusindex;
    }
}