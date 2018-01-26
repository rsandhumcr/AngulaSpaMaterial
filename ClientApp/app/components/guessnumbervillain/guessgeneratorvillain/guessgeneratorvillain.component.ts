import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";


export class GuessgeneratorVillainData {
    username: string;
    minvalue: number;
    maxvalue: number;
}

@Component({
    selector: 'app-guessgeneratorvillain',
    templateUrl: './guessgeneratorvillain.component.html',
    styleUrls: ['./guessgeneratorvillain.component.css']
})
export class GuessgeneratorVillainComponent implements OnInit {

    @Output() processentry = new EventEmitter<GuessgeneratorVillainData>();
    @Input('username') usernameInital: string = '';
    @Input('minvalue') minvalueInital: number = 0;
    @Input('maxvalue') maxvalueInital: number = 100;

    public generationForm: FormGroup;
    public username: FormControl;
    public minvalue: FormControl;
    public maxvalue: FormControl;

    public guess: string = '0';

    constructor(private formbuilder: FormBuilder) {

    }

    ngOnInit() {
        this.initialControls();
    }

    private initialControls() {
        this.username = new FormControl(this.usernameInital, [Validators.required]);
        this.minvalue = new FormControl(this.minvalueInital, [Validators.required, Validators.pattern("^-?[0-9]*")]);
        this.maxvalue = new FormControl(this.maxvalueInital, [Validators.required, Validators.pattern("[0-9]*")]);

        this.generationForm = this.formbuilder.group({
            username: this.username,
            minvalue: this.minvalue,
            maxvalue: this.maxvalue
        });
    }

    public processNumber() {
        let guessgeneratorData = new GuessgeneratorVillainData();
        guessgeneratorData.username = this.username.value;
        guessgeneratorData.minvalue = Number(this.minvalue.value);
        guessgeneratorData.maxvalue = Number(this.maxvalue.value);
        this.processentry.emit(guessgeneratorData);
    }
}