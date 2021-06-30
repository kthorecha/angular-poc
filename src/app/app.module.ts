import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSelectModule } from 'ngx-select-ex';
import { DragAndDropModule } from 'angular-draggable-droppable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { WellComponent } from './wells/well/well.component';
import { WellListComponent } from './wells/well-list/well-list.component';
import { RenderComponent } from './render/render.component';
import { HeaderComponent } from './elements/header.component';
import { TableComponent } from './elements/table.component';
import { FooterComponent } from './elements/footer.component';
import { TimeComponent } from './elements/time.component';
import { DropdownComponent } from './elements/dropdown.component';
import { SpinnerComponent } from './elements/spinner.component';
import { TextboxComponent } from './elements/textbox.component';
import { ButtonComponent } from './elements/button.component';
import { DividerComponent } from './elements/divider.component';
import { MaskComponent } from './elements/mask.component';
import { RenderDirective } from './render/render.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    WellComponent,
    WellListComponent,
    RenderComponent,
    HeaderComponent,
    TableComponent,
    FooterComponent,
    TimeComponent,
    DropdownComponent,
    SpinnerComponent,
    TextboxComponent,
    ButtonComponent,
    DividerComponent,
    MaskComponent,
    RenderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragAndDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
