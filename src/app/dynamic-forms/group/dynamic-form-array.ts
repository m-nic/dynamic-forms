import { DynamicElement } from '../elements/dynamic-element';
import { DynamicFormGroup } from './dynamic-form-group';

export class DynamicFormArray {

    public _elementsArray: (DynamicFormGroup | DynamicElement)[] = [];
    public elementGenerate: (DynamicFormGroup | DynamicElement);
    public renderer: any;

    public maxAddLimit = 0;
    public cssClass: string;

    public getterArguments = [];


    constructor(public id?: string) {

    }

    elements(elements: (DynamicFormGroup | DynamicElement)[] = []) {
        this._elementsArray = elements;
        return this;
    }

    generateElement(element: (DynamicFormGroup | DynamicElement)) {
        this.elementGenerate = element;
        return this;
    }

    setMaxAddLimit(max: number) {
        this.maxAddLimit = max;
        return this;
    }

    setControlsRenderer(renderer) {
        this.renderer = renderer;
        return this;
    }

    setCssClass(cssClass: string) {
        this.cssClass = cssClass;
        return this;
    }
}
