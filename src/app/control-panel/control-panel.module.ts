import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashwordComponent } from './dashword/dashword.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DashwordComponent],
  imports: [
    CommonModule,SharedModule
  ],
  exports:[
    DashwordComponent
  ]
})
export class ControlPanelModule { }
