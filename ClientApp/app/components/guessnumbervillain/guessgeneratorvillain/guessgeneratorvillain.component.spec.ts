/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { GuessgeneratorVillainComponent } from './guessgeneratorvillain.component';

let component: GuessgeneratorVillainComponent;
let fixture: ComponentFixture<GuessgeneratorVillainComponent>;

describe('guessgenerator component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ GuessgeneratorVillainComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(GuessgeneratorVillainComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});