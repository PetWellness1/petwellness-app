import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotificationNavbarComponent } from './shared/navbar/notification-navbar/notification-navbar.component';
import { HomeduenioModule } from './homeduenio/homeduenio.module';
import { HttpClientModule } from '@angular/common/http';
import { HomevetModule } from './homevet/homevet.module';
import { PerfilPacienteComponent } from './perfil-paciente/perfil-paciente.component';
import { InformacionGeneralComponent } from './informacion-general/informacion-general.component';
import { NotasConsultaComponent } from './notas-consulta/notas-consulta.component';
import { PlanesAccionComponent } from './planes-accion/planes-accion.component';
import { HistorialMedicoComponent } from './historial-medico/historial-medico.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';

  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotificationNavbarComponent,
    PerfilPacienteComponent,
    InformacionGeneralComponent,
    NotasConsultaComponent,
    PlanesAccionComponent,
    HistorialMedicoComponent,
    ArchivosComponent,
    EstadisticaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HomeduenioModule,
    HomevetModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
