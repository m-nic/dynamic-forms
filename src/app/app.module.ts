import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormModule } from './dynamic-forms/dynamic-form.module';
import { CustomFormDisplayComponent } from './custom-form-display.component';
import { CustomFormDisplayComponent2 } from './custom-form-display2.component';

@NgModule({
    declarations: [
        AppComponent,
        CustomFormDisplayComponent,
        CustomFormDisplayComponent2
    ],
    imports: [
        BrowserModule,
        DynamicFormModule,
    ],
    entryComponents: [
        CustomFormDisplayComponent,
        CustomFormDisplayComponent2
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
