
export class DynamicElement {

    public static readonly DEFAULT_DEBOUNCE = 300;

    public value: string = '';
    public renderer: any;
    public label: string;
    public placeholder: string;
    public required: boolean;
    public order: number;
    public mask: (string | RegExp)[] = [];
    public controlType: string;
    public type: string;
    public validators: any[] = [];
    public options: { key: string; value: string; }[];

    cssClass = 'col-xs-12';

    public debounceTime: number = DynamicElement.DEFAULT_DEBOUNCE;

    public onChangeHandler: Function = null;

    constructor(public id: string, label: string = '') {
        if (!label) {
            this.label = this.id.toUpperCase();
        }
    }

    setType(controlType: string) {
        this.controlType = controlType;
        this.type = controlType;
        return this;
    }

    setValue(value: string) {
        this.value = value;
        return this;
    }

    setPlaceholder(placeholder: string) {
        this.placeholder = placeholder;
        return this;
    }

    setLabel(label: string) {
        this.label = label;
        return this;
    }

    setRenderer(renderer: any) {
        this.renderer = renderer;
        return this;
    }

    onChange(onChangeHandler: Function) {
        this.onChangeHandler = onChangeHandler;
        return this;
    }

    setChangeDebounce(debounceTime) {
        this.debounceTime = debounceTime;
        return this;
    }

    setValidators(validators: any[]) {
        this.validators = validators;
        return this;
    }

    setMask(mask: (string | RegExp)[]) {
        this.mask = mask;
        return this;
    }

    setCssClass(cssClass: string) {
        this.cssClass = cssClass;
        return this;
    }

}

