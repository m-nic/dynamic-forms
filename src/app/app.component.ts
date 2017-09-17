import { Component, ViewChild } from '@angular/core';
import { DynamicForm } from './dynamic-forms/dynamic-form';
import { DynamicElement } from './dynamic-forms/elements/definitions/dynamic-element.base';
import { DynamicFormGroup } from './dynamic-forms/group/dynamic-form-group';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form.component';
import { CustomFormDisplayComponent } from './custom-form-display.component';
import { CustomFormDisplayComponent2 } from './custom-form-display2.component';


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
            .setControlsRenderer(CustomFormDisplayComponent)

            .controls([
                new DynamicElement('hostname')
                    .setLabel('HostName')
                    .setType('text')
                    .setValue('www')
                    .setRenderer(CustomFormDisplayComponent2)
                    .setPlaceholder('')
                    .onChange((data, fieldsMapping) => {
                        console.log(data, fieldsMapping);
                    }),

                new DynamicFormGroup('wan')
                    .controls([
                        new DynamicElement('username')
                            .setType('text')
                            .setValue('1'),

                        new DynamicFormGroup('ssh')
                            .controls([
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


    ngAfterViewInit() {
        // console.log(JSON.stringify(this.formComponent.formGroup.getRawValue(), null, 2));
        //
        // this.formComponent.formGroup.valueChanges.subscribe(data => {
        //     console.clear();
        //     console.log('Form changes', JSON.stringify(data, null, 2));
        // });
    }
}
