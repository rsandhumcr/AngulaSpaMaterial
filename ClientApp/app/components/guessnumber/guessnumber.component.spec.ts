/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { GuessnumberComponent } from './guessnumber.component';

let component: GuessnumberComponent;
let fixture: ComponentFixture<GuessnumberComponent>;

describe('guessnumber component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ GuessnumberComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(GuessnumberComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});