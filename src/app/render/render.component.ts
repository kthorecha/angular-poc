import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ButtonComponent } from '../elements/button.component';
import { DividerComponent } from '../elements/divider.component';
import { DropdownComponent } from '../elements/dropdown.component';
import { FooterComponent } from '../elements/footer.component';
import { HeaderComponent } from '../elements/header.component';
import { MaskComponent } from '../elements/mask.component';
import { SpinnerComponent } from '../elements/spinner.component';
import { TableComponent } from '../elements/table.component';
import { TextboxComponent } from '../elements/textbox.component';
import { TimeComponent } from '../elements/time.component';
import { RenderDirective } from './render.directive';
import { Render } from './render';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
  @ViewChild(RenderDirective, { static: true }) renderEl!: RenderDirective;

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
  renderElObj: any = {
    "header": HeaderComponent,
    "table": TableComponent,
    "footer": FooterComponent,
    "time": TimeComponent,
    "dropdown": DropdownComponent,
    "spinner": SpinnerComponent,
    "textbox": TextboxComponent,
    "button": ButtonComponent,
    "divider": DividerComponent,
    "mask": MaskComponent
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  dragEnd(ev: any) {
    console.log('This is drag end,',ev);
  }

  dropElem(ev: any) {
    // ev.dropData
    console.log(ev);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.renderElObj[ev.dropData]);

    const viewContainerRef = this.renderEl.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    // componentRef.instance.data = ev.data;
  }

}
