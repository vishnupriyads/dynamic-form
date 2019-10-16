import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateformComponent } from './createform/createform.component';
import { ViewformComponent } from './viewform/viewform.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreateformComponent, ViewformComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CreateformComponent,
    ViewformComponent
  ]
})
export class DynamicformModule { }
