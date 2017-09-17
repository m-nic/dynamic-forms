import { Component, Input } from '@angular/core';
import { DynamicElement } from './dynamic-forms/elements/dynamic-element';
import { DynamicElementRendererBase } from './dynamic-forms/elements/render/dynamic-element-renderer.base';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from './dynamic-forms/dynamic-form.service';

@Component({
    templateUrl: './custom-form-display.component.html'
})
export class CustomFormDisplayComponent extends DynamicElementRendererBase {
    @Input() element: DynamicElement;
    @Input() formGroup: FormGroup;

    constructor(protected dynamicFormService: DynamicFormService) {
        super(dynamicFormService);
    }
}
