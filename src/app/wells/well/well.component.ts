import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit, OnChanges {

  @Output() messageEvent = new EventEmitter();
  @Input() childMessage: any;

  userForm = new FormGroup({
    nameControl: new FormControl(),
    typeControl: new FormControl(),
    selectControl: new FormControl()
  })
  public selectItems = [
    { optionId: 100000100, optionTitle: '100000100' },
    { optionId: 101010101, optionTitle: '101010101' },
    { optionId: 100010001, optionTitle: '100010001' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showData() {
    // send to child-parent
    this.messageEvent.emit({
      name: this.userForm.value.nameControl,
      type: this.userForm.value.typeControl,
      source: this.userForm.value.selectControl
    });
    this.userForm.reset();
  }

  ngOnChanges(data: any) {
    console.log('dddd',data.childMessage.currentValue);
    if (data.childMessage.currentValue) {
      // this.userForm.value.nameControl = data.childMessage.currentValue.name;
      // this.userForm.value.typeControl = data.childMessage.currentValue.type;
      // this.userForm.value.selectControl = data.childMessage.currentValue.source;
      this.userForm.setValue({
        nameControl: data.childMessage.currentValue.name,
        typeControl: data.childMessage.currentValue.type,
        selectControl: data.childMessage.currentValue.source
      })
    }
  }

}
