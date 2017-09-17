import { Component, Input } from '@angular/core';

@Component({
    templateUrl: './dynamic-element-validation.component.html'
})
export class validationMessage {
    @Input() control: FormControl;
}