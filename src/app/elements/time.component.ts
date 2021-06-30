import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-elements-time',
    template: `<h1>Time</h1>
    <h4>This is a time component</h4>
    <div>{{dateTime}}</div>`
})
export class TimeComponent implements OnInit {
    constructor() { }

    ngOnInit() {}
    dateTime: any = new Date().toUTCString();
}