import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {
  wells = [
    { name: "aaa", type: "sss", source: 100000100}
  ];
  fromParent: any;

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage($event: any) {
    this.wells.push($event);
  }

  showInForm(el: any) {
    console.log(el);
    this.fromParent = el;
  }
}
