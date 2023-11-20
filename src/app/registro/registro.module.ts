import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar/registrar.component';
import { ControlPanelModule } from '../control-panel/control-panel.module';



@NgModule({
  declarations: [RegistrarComponent],
  imports: [
    CommonModule,
    ControlPanelModule
  ],
  exports : [
    RegistrarComponent
  ]
})
export class RegistroModule { }
