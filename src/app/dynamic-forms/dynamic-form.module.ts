import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormService } from './dynamic-form.service';
import { DynamicFormGroupComponent } from './group/dynamic-form-group.component';
import { DynamicFormElementComponent } from './elements/dynamic-form-element.component';
import { CustomElementRenderDirective } from './elements/render/dynamic-element-render.directive';
import { FormElementComponent } from './elements/form-element.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        DynamicFormComponent,
        DynamicFormGroupComponent,
        DynamicFormElementComponent,
        FormElementComponent,

        CustomElementRenderDirective,
    ],
    providers: [
        DynamicFormService
    ],
    exports: [
        ReactiveFormsModule,

        DynamicFormComponent,
        FormElementComponent,

        CustomElementRenderDirective,
    ]
})
export class DynamicFormModule { }
