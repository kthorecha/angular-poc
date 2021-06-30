import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-elements-spinner',
    template: `<style>
    .loader {
      border: 16px solid #f3f3f3;
      border-radius: 50%;
      border-top: 16px solid #3498db;
      width: 120px;
      height: 120px;
      -webkit-animation: spin 2s linear infinite; /* Safari */
      animation: spin 2s linear infinite;
    }
    
    /* Safari */
    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    </style>
    <h1>Spinner</h1>
    <h4>This is a spinner component</h4>
    <div class="loader"></div>`
})
export class SpinnerComponent implements OnInit {
    constructor() { }

    ngOnInit() {}
}