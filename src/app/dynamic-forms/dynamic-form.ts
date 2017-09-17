import { DynamicFormGroup } from './group/dynamic-form-group';
import { DynamicElement } from './elements/definitions/dynamic-element.base';

export class DynamicForm extends DynamicFormGroup {

    public _controls: (DynamicFormGroup | DynamicElement)[];

    controls(controls: (DynamicFormGroup | DynamicElement)[] = []) {
        this._controls = [
            new DynamicFormGroup(this.id).controls(controls)];
        return this;
    }

}