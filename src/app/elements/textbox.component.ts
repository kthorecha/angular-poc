import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-elements-textbox',
    template: `<h1>Textbox</h1>
    <h4>This is a textbox component</h4>
    <input type="text">`
})
export class TextboxComponent implements OnInit {
    constructor() { }

    ngOnInit() {}
}