import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuinesComponent } from './somos/quines/quines.component';
import { DashwordComponent } from './control-panel/dashword/dashword.component';
import { ClientesComponent } from './somos/clientes/clientes.component';
import { RegistrarComponent } from './registro/registrar/registrar.component';


const routes: Routes = [
  { path: '', component: DashwordComponent },
  { path: 'quienes', component: QuinesComponent },
  { path: 'clientes',component: ClientesComponent},
  { path: 'registrar',component: RegistrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
