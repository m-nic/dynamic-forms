import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicElement } from './dynamic-element';
import { DynamicElementRendererBase } from './render/dynamic-element-renderer.base';
import { DynamicFormService } from '../dynamic-form.service';

@Component({
    selector: 'form-element',
    templateUrl: './form-element.component.html'
})
export class FormElementComponent extends DynamicElementRendererBase {
    @Input() formGroup: FormGroup;
    @Input() element: DynamicElement;

    constructor(protected dynamicFormService: DynamicFormService) {
        super(dynamicFormService);
    }

}
