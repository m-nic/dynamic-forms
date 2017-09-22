import { Component, ViewChild } from '@angular/core';
import { DynamicForm } from './dynamic-forms/dynamic-form';
import { DynamicElement } from './dynamic-forms/elements/dynamic-element';
import { DynamicFormGroup } from './dynamic-forms/group/dynamic-form-group';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form.component';
import { CustomFormDisplayComponent } from './custom-form-display.component';
import { CustomFormDisplayComponent2 } from './custom-form-display2.component';
import { FormGroup, Validators } from '@angular/forms';
import { DynamicFormValidator } from './dynamic-forms/elements/validation/dynamic-form.validator';
import { DynamicFormArray } from './dynamic-forms/group/dynamic-form-array';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    @ViewChild(DynamicFormComponent) formComponent: DynamicFormComponent;

    testForm: any;

    constructor() {

        this.testForm = new DynamicFormGroup()
            .elements([

                new DynamicFormGroup('network')
                    .elements([
                        new DynamicElement('domain')
                            .setType(DynamicElement.TYPE_TEXT)
                            .setLabel('Hostname')
                            .setPlaceholder('hostname')
                            .setHasBottomDivider(),

                        new DynamicFormGroup('test1')
                            .elements([
                                new DynamicElement('test2')
                                    .setType(DynamicElement.TYPE_TEXT)
                                    .setLabel('Hostname')
                                    .setPlaceholder('hostname')
                                    .setHasBottomDivider(),
                            ]),

                        new DynamicFormArray('qwe')
                            .elements([
                                new DynamicElement('test24')
                                    .setType(DynamicElement.TYPE_TEXT)
                                    .setLabel('zzzz')
                                    .setPlaceholder('zzzzz')
                                    .setHasBottomDivider(),

                                new DynamicElement('test223')
                                    .setType(DynamicElement.TYPE_TEXT)
                                    .setLabel('zzzz')
                                    .setPlaceholder('zzzz')
                                    .setHasBottomDivider(),
                            ])
                    ]),

                new DynamicFormGroup('admin')
                    .elements([
                        new DynamicElement('username')
                            .setType(DynamicElement.TYPE_PASSWORD)
                            .setLabel('Admin username')
                            .setPlaceholder('Username'),

                        new DynamicElement('password')
                            .setType(DynamicElement.TYPE_PASSWORD)
                            .setLabel('Password'),

                        new DynamicElement('confirm_password')
                            .setType(DynamicElement.TYPE_PASSWORD)
                            .setLabel('Confirm Password'),

                        new DynamicFormGroup('network')
                            .elements([
                                new DynamicElement('domain2')
                                    .setType(DynamicElement.TYPE_TEXT)
                                    .setLabel('Hostname')
                                    .setPlaceholder('hostname')
                                    .setHasBottomDivider(),

                                new DynamicFormGroup('test13')
                                    .elements([
                                        new DynamicElement('test24')
                                            .setType(DynamicElement.TYPE_TEXT)
                                            .setLabel('Hostname')
                                            .setPlaceholder('hostname')
                                            .setHasBottomDivider(),
                                    ])
                            ])
                    ]),
            ]);

        // this.testForm = new DynamicForm('network')
        //     // .setControlsRenderer(CustomFormDisplayComponent)
        //
        //     .elements([
        //         new DynamicElement('hostname')
        //             .setLabel('HostName')
        //             .setType('text')
        //             .setValue('')
        //             // .setRenderer(CustomFormDisplayComponent2)
        //             .setPlaceholder('(123) 123-1231')
        //             .setMask(['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/])
        //             .onChange((data, fieldsMapping, formGroup: FormGroup) => {
        //                 formGroup.get(fieldsMapping['username']).setValue(data);
        //                 formGroup.get(fieldsMapping['lan']).disable();
        //
        //                 console.clear();
        //                 console.log(
        //                     this.formComponent.formGroup,
        //                     JSON.stringify(this.formComponent.formGroup.getRawValue(), null, 2)
        //                 );
        //             })
        //             .setValidators([Validators.required, DynamicFormValidator.regexValidator(/[0-9]/, 'Error Showing')])
        //         ,
        //
        //         new DynamicFormGroup('wan')
        //             .setCssClass('col-xs-6')
        //             .elements([
        //                 new DynamicElement('username')
        //                     .setType('text')
        //                     .setCssClass('col-xs-6')
        //                     .setValue('1'),
        //
        //                 new DynamicFormGroup('ssh')
        //                     .setCssClass('col-xs-6')
        //                     .elements([
        //                         new DynamicElement('test')
        //                             .setType('text')
        //                             .setValue('jawhawhdhawd')
        //
        //                     ])
        //             ]),
        //
        //         new DynamicElement('lan')
        //             .setCssClass('col-xs-6')
        //             .setType('text')
        //             .setValue('1')
        //             .setPlaceholder(''),
        //     ]);
    }

    ngAfterViewInit() {
        console.log(this.formComponent);
    }

}
