/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { GuessprocessorVillainComponent } from './guessprocessorvillain.component';

let component: GuessprocessorVillainComponent;
let fixture: ComponentFixture<GuessprocessorVillainComponent>;

describe('guessprocessor component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ GuessprocessorVillainComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(GuessprocessorVillainComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});