import { Component, Input } from '@angular/core';
import { DynamicElement } from './dynamic-forms/elements/definitions/dynamic-element.base';
import { DynamicElementRendererBase } from './dynamic-forms/elements/render/dynamic-element-renderer.base';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from './dynamic-forms/dynamic-form.service';

@Component({
    templateUrl: './custom-form-display2.component.html'
})
export class CustomFormDisplayComponent2 extends DynamicElementRendererBase {
    @Input() element: DynamicElement;
    @Input() formGroup: FormGroup;

    constructor(protected dynamicFormService: DynamicFormService) {
        super(dynamicFormService);
    }
}
