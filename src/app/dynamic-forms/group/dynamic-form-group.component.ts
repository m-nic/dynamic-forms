import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormGroup } from './dynamic-form-group';
import { DynamicFormService } from '../dynamic-form.service';
import { DynamicElement } from '../elements/definitions/dynamic-element.base';

declare let _: any;

@Component({
    selector: 'dynamic-form-group',
    templateUrl: './dynamic-form-group.component.html',
})
export class DynamicFormGroupComponent {
    @Input() formGroup: FormGroup;
    @Input() dynamicFormGroup: DynamicFormGroup;

    @Input() chainPath: string[] = [];

    constructor(public dynamicFormService: DynamicFormService) {
    }

    isDynamicGroup(group: DynamicFormGroup): boolean {
        if (group instanceof DynamicFormGroup) {

            if (!this.formGroup.controls[group.id]) {
                this.chainPath.push(group.id);

                this.formGroup.addControl(group.id,
                    this.dynamicFormService.createGroup(
                        group._controls,
                        this.chainPath
                    )
                );
            }

            return true;
        }

        return false;
    }

    isDynamicElement(control: DynamicElement): boolean {
        if (control instanceof DynamicElement) {
            if (!this.formGroup.controls[control.id]) {

                this.formGroup.addControl(
                    control.id,
                    this.dynamicFormService.createElement(control, this.chainPath)
                );
            }
            return true;
        }
        return false;
    }

    getControls() {
        return this.dynamicFormGroup._controls;
    }
}
