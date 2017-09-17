import { DynamicElement } from '../elements/definitions/dynamic-element.base';

export class DynamicFormGroup {

    public _controls: (DynamicFormGroup | DynamicElement)[];
    public renderer: any;

    constructor(public id: string) {

    }

    controls(controls: (DynamicFormGroup | DynamicElement)[] = []) {
        this._controls = controls;
        return this;
    }

    setControlsRenderer(renderer) {
        this.renderer = renderer;
        return this;
    }
}
