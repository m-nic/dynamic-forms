import { DynamicElement } from '../elements/dynamic-element';

export class DynamicFormGroup {

    public _elementsArray: (DynamicFormGroup | DynamicElement)[];
    public renderer: any;

    constructor(public id: string) {

    }

    elements(elements: (DynamicFormGroup | DynamicElement)[] = []) {
        this._elementsArray = elements;
        return this;
    }

    setControlsRenderer(renderer) {
        this.renderer = renderer;
        return this;
    }
}
