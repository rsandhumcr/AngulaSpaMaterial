import { Component } from '@angular/core';
import { GuessnumberService, GuessData } from '../../services/guessnumber.service';
import { GuessgeneratorData } from './guessgenerator/guessgenerator.component';

@Component({
    selector: 'app-guessnumber',
    templateUrl: './guessnumber.component.html',
    styleUrls: ['./guessnumber.component.css'],
    providers: [GuessnumberService]
    
})

export class GuessnumberComponent {

    public guessData: GuessData;
    public guess: string = '0';
    public playing: boolean = false;
    private minvalue: number = 0;
    private maxvalue: number = 100;
    private statusindex: number = 0;
    public techicon: string = 'dist/img/angularmaterial.png';

    constructor(private guessnumberService: GuessnumberService)  {
    }

    public processentry($event: GuessgeneratorData) {
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