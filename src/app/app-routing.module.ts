import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateformComponent } from './dynamicform/createform/createform.component';
import { ViewformComponent } from './dynamicform/viewform/viewform.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'createform',
    pathMatch: 'full'
  },
  {
    path: 'createform',
    component: CreateformComponent
  },
  {
    path: 'viewform',
    component:ViewformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
