import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-elements-dropdown',
    template: `<h1>Dropdown</h1>
    <h4>This is a dropdown component</h4>
    <select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    </select>`
})
export class DropdownComponent implements OnInit {
    constructor() { }

    ngOnInit() {}
}