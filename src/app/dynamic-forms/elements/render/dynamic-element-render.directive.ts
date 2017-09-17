import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { DynamicElement } from '../definitions/dynamic-element.base';
import { FormGroup } from '@angular/forms';
import { DynamicElementRendererBase } from './dynamic-element-renderer.base';

@Directive({
    selector: '[dynamicElementRenderer]',
})
export class CustomElementRenderDirective implements OnInit {

    @Input() dynamicElementRenderer: DynamicElementRendererBase | any;
    @Input() element: DynamicElement;
    @Input() formGroup: FormGroup;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {
    }

    ngOnInit() {

        if (this.dynamicElementRenderer) {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
                this.dynamicElementRenderer
            );

            this.viewContainerRef.clear();

            let component = this.viewContainerRef.createComponent(componentFactory);
            let instance = component.instance;
            instance['element'] = this.element;
            instance['formGroup'] = this.formGroup;
        }

    }
}
