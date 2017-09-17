import { DynamicElement } from '../definitions/dynamic-element.base';
import { Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from '../../dynamic-form.service';

export abstract class DynamicElementRendererBase implements OnInit {
    @Input() abstract element: DynamicElement;
    @Input() abstract formGroup: FormGroup;

    constructor(protected dynamicFormService: DynamicFormService) {}

    ngOnInit() {
        this.dynamicFormService.registerHandlers(this.element);
    }
}
