/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { GuessnumberVillainComponent } from './guessnumbervillain.component';

let component: GuessnumberVillainComponent;
let fixture: ComponentFixture<GuessnumberVillainComponent>;

describe('guessnumber component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ GuessnumberVillainComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(GuessnumberVillainComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});