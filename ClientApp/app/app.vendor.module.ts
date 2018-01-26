import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSlideToggleModule, MatSliderModule, MatInputModule } from '@angular/material';
import 'hammerjs';


@NgModule({
    exports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatInputModule
    ]
})
export class AppVendorModule {
    
}