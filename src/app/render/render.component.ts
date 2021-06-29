import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
  renderElements: any[] = [
    "header",
    "table",
    "footer",
    "time",
    "dropdown",
    "spinner",
    "textbox",
    "button",
    "divider",
    "mask"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
