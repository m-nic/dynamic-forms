import { Component, ViewChild } from '@angular/core';
import { DynamicElement } from './dynamic-forms/elements/dynamic-element';
import { DynamicFormGroup } from './dynamic-forms/group/dynamic-form-group';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form.component';
import { CustomFormDisplayComponent } from './custom-form-display.component';
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
                            .setPlaceholder('hostname')
                            .setHasBottomDivider(),

                        new DynamicFormGroup('ssh')
                            .elements([
                                new DynamicElement('enabled')
                                    .setType(DynamicElement.TYPE_CHECKBOX),

                                new DynamicFormArray('keys')
                                    .generateElement(
                                        new DynamicElement('key')
                                            .setType(DynamicElement.TYPE_TEXT)
                                            .setPlaceholder('zzzzz')
                                            .setIsRemovable()
                                    )
                                    .setMaxAddLimit(5)
                            ]),
                    ]),

                new DynamicFormGroup('admin')
                    .elements([
                        new DynamicElement('username')
                            .setType(DynamicElement.TYPE_TEXT)
                            .setPlaceholder('Username'),

                        new DynamicElement('password')
                            .setType(DynamicElement.TYPE_PASSWORD)

                    ]),
            ]);

    }

    ngAfterViewInit() {
        console.log(this.formComponent);

        this.formComponent.fg.patchValue({
                network: {
                    domain: 'test.domain',
                    ssh: {
                        enabled: true,

                        keys: [
                            {
                                key: 'test1'
                            },
                            {
                                key: 'test2'
                            },
                            {
                                key: 'test3'
                            },
                        ]
                    }
                },

                admin: {
                    username: 'test',
                    password: 'qwe'
                }

            });
    }

}
