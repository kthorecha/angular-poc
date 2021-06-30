import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[renderEl]',
})
export class RenderDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}