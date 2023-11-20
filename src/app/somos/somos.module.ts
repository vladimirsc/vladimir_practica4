import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuinesComponent } from './quines/quines.component'; 
import { ControlPanelModule } from '../control-panel/control-panel.module';
import { ClientesComponent } from './clientes/clientes.component';



@NgModule({
  declarations: [QuinesComponent, ClientesComponent],
  imports: [
    CommonModule,
    ControlPanelModule
  ],
  exports :[
    QuinesComponent,
    ClientesComponent
  ]
})
export class SomosModule { }
