import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-elements-button',
    template: `<h1>Button</h1>
    <h4>This is a button component</h4>
    <button class="btn btn-primary">Click Me!</button>`
})
export class ButtonComponent implements OnInit {
    constructor() { }

    ngOnInit() {}
}