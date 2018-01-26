import { Component, OnInit, OnDestroy } from '@angular/core';
import { GuessgeneratorVillainData } from '../guessnumbervillain/guessgeneratorvillain/guessgeneratorvillain.component';
import { NgRedux, select } from 'ng2-redux';
import { CREATE_GUESS, PROCESS_GUESS } from '../../redux/actions'; 
import { IGuessData } from '../../redux/guessnumberredux.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-guessnumberredux',
    templateUrl: './guessnumberredux.component.html',
    styleUrls: ['./guessnumberredux.component.css'],
})
export class GuessnumberReduxComponent implements OnInit, OnDestroy {

    public guess: string = '0';
    public playing: boolean = false;
    public guessData: IGuessData;
    public techicon: string = 'dist/img/redux.png';
    private minvalue: number = 0;
    private maxvalue: number = 100;
    private statusindex: number = 0;
    
    private unsubscribe: any;

    constructor(private ngRedux: NgRedux<IGuessData>) {
        
    }

    ngOnInit() {
        //@select()  replacement for whole object.
        this.unsubscribe = this.ngRedux.subscribe(() => {
            this.guessData = this.ngRedux.getState();
        });
    }

    ngOnDestroy() {
        this.unsubscribe();
    }

    public processentry($event: GuessgeneratorVillainData) {
        this.playing = true;
        this.minvalue = Number($event.minvalue);
        this.maxvalue = Number($event.maxvalue);
        this.ngRedux.dispatch({ type: CREATE_GUESS, playersname: $event.username, minvalue: this.minvalue, maxvalue: this.maxvalue });
        this.statusindex =0;
    }

    public processguess($event: number) {
        this.ngRedux.dispatch({ type: PROCESS_GUESS, guess: Number($event) });
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
