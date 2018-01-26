import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { AppVendorModule } from './app.vendor.module';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { GuessprocessorComponent, GuessgeneratorComponent, GuessnumberComponent }
    from './components/guessnumber/guessnumber.barrel';
import { GuessprocessorVillainComponent, GuessgeneratorVillainComponent, GuessnumberVillainComponent }
    from './components/guessnumbervillain/guessnumbervillain.barrel';
import { GuessnumberReduxComponent } from './components/guessnumberredux/guessnumberredux.barrel';
//import { GuessnumberService } from './services/guessnumber.service';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { IGuessData, INITIAL_STATE } from './redux/guessnumberredux.service';
import { rootReducer } from './redux/store';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,

        GuessnumberComponent,
        GuessgeneratorComponent,
        GuessprocessorComponent,

        GuessnumberVillainComponent,
        GuessgeneratorVillainComponent,
        GuessprocessorVillainComponent,

        GuessnumberReduxComponent
    ],
    imports: [
        AppVendorModule,
        NgReduxModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'guessnumber', component: GuessnumberComponent },
            { path: 'guessnumbervillain', component: GuessnumberVillainComponent },
            { path: 'guessnumberredux', component: GuessnumberReduxComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],

    //providers: [GuessnumberService]
})
export class AppModuleShared {
    constructor(ngRedux: NgRedux<IGuessData>) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}
