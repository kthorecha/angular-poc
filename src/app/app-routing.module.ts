import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderComponent } from './render/render.component';
import { UsersComponent } from './users/users.component';
import { WellListComponent } from './wells/well-list/well-list.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'wells', component: WellListComponent},
  { path: 'render', component: RenderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
