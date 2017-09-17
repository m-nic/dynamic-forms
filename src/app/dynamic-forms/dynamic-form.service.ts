import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DynamicElement } from './elements/definitions/dynamic-element.base';
import { DynamicFormGroup } from './group/dynamic-form-group';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Injectable()
export class DynamicFormService {

    public fieldsMapping: { [id: string]: string[] }[] = [];

    fb: FormBuilder;

    formRenderer: any;

    private currentForm: FormGroup;

    constructor() {
        this.fb = new FormBuilder;
    }

    createElement(element: DynamicElement, chainPath: string[]) {
        this.registerPath(element, chainPath.slice());
        return new FormControl(element.value, element.validators || []);
    }

    createGroup(controls: (DynamicFormGroup | DynamicElement)[], chainPath: string[]) {
        let builtForm = {};

        let currentPath = chainPath.slice();
        for (let control of controls) {
            if (control instanceof DynamicElement) {
                builtForm[control.id] = [control.value, control.validators];
                this.registerPath(control, currentPath);
            } else if (control instanceof DynamicFormGroup) {
                chainPath.push(control.id);
                builtForm[control.id] = this.fb.group({});
            }
        }

        return this.fb.group(builtForm);
    }

    registerPath(element: DynamicElement, path: string[]) {
        this.fieldsMapping[element.id] = path.concat([element.id]);
    }

    registerHandlers(element: DynamicElement) {
        if (element.onChangeHandler instanceof Function) {
            console.log(element);
            this.currentForm.get(this.fieldsMapping[element.id])
                .valueChanges
                .debounceTime(DynamicElement.DEFAULT_DEBOUNCE)
                .subscribe((value: any) => {
                    element.onChangeHandler(value, this.fieldsMapping);
                });
        }


    }

    addFormRenderer(formRenderer: any) {
        this.formRenderer = formRenderer;
    }

    manageForm(form: FormGroup) {
        this.currentForm = form;
    }
}
