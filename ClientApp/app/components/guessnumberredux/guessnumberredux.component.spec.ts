/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { GuessnumberReduxComponent } from './guessnumberredux.component';

let component: GuessnumberReduxComponent;
let fixture: ComponentFixture<GuessnumberReduxComponent>;

describe('guessnumber component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ GuessnumberReduxComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(GuessnumberReduxComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});