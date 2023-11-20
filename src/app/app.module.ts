import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlPanelModule } from './control-panel/control-panel.module';
import { RegistroModule } from './registro/registro.module';
import { SharedModule } from './shared/shared.module';
import { SomosModule } from './somos/somos.module'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ControlPanelModule,
    RegistroModule,
    SharedModule,
    SomosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
