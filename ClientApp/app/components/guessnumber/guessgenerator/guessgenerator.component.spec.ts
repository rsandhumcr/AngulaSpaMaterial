/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { GuessgeneratorComponent } from './guessgenerator.component';

let component: GuessgeneratorComponent;
let fixture: ComponentFixture<GuessgeneratorComponent>;

describe('guessgenerator component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ GuessgeneratorComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(GuessgeneratorComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});