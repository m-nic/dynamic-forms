import { Component, ViewChild } from '@angular/core';
import { DynamicForm } from './dynamic-forms/dynamic-form';
import { DynamicElement } from './dynamic-forms/elements/dynamic-element';
import { DynamicFormGroup } from './dynamic-forms/group/dynamic-form-group';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form.component';
import { CustomFormDisplayComponent } from './custom-form-display.component';
import { CustomFormDisplayComponent2 } from './custom-form-display2.component';
import { FormGroup, Validators } from '@angular/forms';
import { DynamicFormValidator } from './dynamic-forms/elements/validation/dynamic-form.validator';


@Component({
    selector: 'app-root',
    template: `
        <div>
            <h2>Job Application for Heroes</h2>
            <dynamic-form [dynamicForm]="testForm"></dynamic-form>
        </div>
    `,
})
export class AppComponent {
    @ViewChild(DynamicFormComponent) formComponent: DynamicFormComponent;

    testForm: any;

    constructor() {

        this.testForm = new DynamicForm('network')
            // .setControlsRenderer(CustomFormDisplayComponent)

            .elements([
                new DynamicElement('hostname')
                    .setLabel('HostName')
                    .setType('text')
                    .setValue('')
                    // .setRenderer(CustomFormDisplayComponent2)
                    .setPlaceholder('')
                    .onChange((data, fieldsMapping, formGroup: FormGroup) => {
                        formGroup.get(fieldsMapping['username']).setValue(data);
                        formGroup.get(fieldsMapping['lan']).disable();

                        console.clear();
                        console.log(
                            this.formComponent.formGroup,
                            JSON.stringify(this.formComponent.formGroup.getRawValue(), null, 2)
                        );
                    })
                    .setValidators([Validators.required, DynamicFormValidator.regexValidator(/[0-9]/, 'Error Showing')])
                ,

                new DynamicFormGroup('wan')
                    .elements([
                        new DynamicElement('username')
                            .setType('text')
                            .setValue('1'),

                        new DynamicFormGroup('ssh')
                            .elements([
                                new DynamicElement('test')
                                    .setType('text')
                                    .setValue('jawhawhdhawd')

                            ])
                    ]),

                new DynamicElement('lan')
                    .setType('text')
                    .setValue('1')
                    .setPlaceholder(''),
            ]);
    }

}
