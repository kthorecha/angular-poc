import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-elements-mask',
    template: `
    <style>
    .el {
        width: 80vw;
        height: 80vh;
        padding: 1rem;
        background-image: url(https://images.unsplash.com/photo-1528287942171-fbe365d1d9ac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&w=1200&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        mask-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/sun.svg);
        mask-size: 100vmin;
        mask-repeat: no-repeat;
        mask-position: center;
      }
      </style>
      <h1>Mask</h1>
    <h4>This is a mask component</h4>
    <div class="el"></div>`
})
export class MaskComponent implements OnInit {
    constructor() { }

    ngOnInit() {}
}