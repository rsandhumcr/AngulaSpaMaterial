import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-guessprocessor',
    templateUrl: './guessprocessor.component.html',
    styleUrls: ['./guessprocessor.component.css']
})

export class GuessprocessorComponent implements OnInit {
    public guessForm: FormGroup;
    public guessvalue: FormControl;
    public guessvalueslider: FormControl;

    @Input() guess: number = 0;
    @Output() processguess = new EventEmitter<number>();
    constructor(private formbuilder: FormBuilder) {

    }

    ngOnInit() {
        this.initialControls();
    }

    private initialControls() {
        this.guessvalue = new FormControl(this.guess, [Validators.required, Validators.pattern("^-?[0-9]*")]);

        this.guessForm = this.formbuilder.group({
            guessvalue: this.guessvalue,
            guessvalueslider: this.guessvalueslider
        });
    }

    public onProcessGuess() {
        let value = this.guessvalue.value;
        this.guess = value;
        this.processguess.emit(value);
    }

    public onSliderChange() {
        this.guessvalue.setValue(this.guess);
    }

    public onCalculateGuess(amount: number) {
        let value = Number(this.guessvalue.value);
        value += amount;
        this.guessvalue.setValue(value);
    }

    public onClear() {
        this.guessvalue.setValue(0);
    }
}