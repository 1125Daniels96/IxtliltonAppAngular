import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginPComponent } from './pages/login-p/login-p.component';
import { LoginDComponent } from './pages/login-d/login-d.component';
import { HeadercComponent } from './shared/headerc/headerc.component';
import { InfoDComponent } from './pages/info-d/info-d.component';
import { InfoPComponent } from './pages/info-p/info-p.component';
import { EmergenciasComponent } from './pages/emergencias/emergencias.component';
import { AppRoutingModule } from './app-routing.module';
import { PortabilidadComponent } from './pages/portabilidad/portabilidad.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { QrDocComponent } from './pages/qr-doc/qr-doc.component';
import { RecetaComponent } from './pages/receta/receta.component';
import { RegistroPComponent } from './pages/registro-p/registro-p.component';
import { RegistroDComponent } from './pages/registro-d/registro-d.component';
import { ConsultasPacienteComponent } from './pages/consultas-paciente/consultas-paciente.component';
import { QrPacienteComponent } from './pages/qr-paciente/qr-paciente.component';
import { HamburguesaPacienteComponent } from './shared/hamburguesa-paciente/hamburguesa-paciente.component';
import { HamburguesaDoctorComponent } from './shared/hamburguesa-doctor/hamburguesa-doctor.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginPComponent,
    LoginDComponent,
    HeadercComponent,
    InfoDComponent,
    InfoPComponent,
    EmergenciasComponent,
    PortabilidadComponent,
    HistorialComponent,
    ConsultasComponent,
    QrDocComponent,
    RecetaComponent,
    RegistroPComponent,
    RegistroDComponent,
    ConsultasPacienteComponent,
    QrPacienteComponent,
    HamburguesaPacienteComponent,
    HamburguesaDoctorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
