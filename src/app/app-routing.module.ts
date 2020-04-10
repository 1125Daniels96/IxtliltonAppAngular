import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './login/log.component';
import { RegistroComponent } from './page/registro/registro.component';
import { HomeComponent } from './page/home/home.component';
import { PacienteComponent } from './page/paciente/paciente.component';
import { ConsultasComponent } from './page/consultas/consultas.component';
import { VerComponent } from './page/ver/ver.component';
import { EmergenciasComponent } from './page/emergencias/emergencias.component';
import { CodigoQrComponent } from './page/codigo-qr/codigo-qr.component';
import { PruebaComponent } from './page/prueba/prueba.component';


const routes: Routes = [
  {path: 'login', component: LogComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: 'consultas', component: ConsultasComponent},
  {path: 'ver', component: VerComponent},
  {path: 'emergencias', component: EmergenciasComponent},
  {path: 'codigo-qr', component: CodigoQrComponent},
  {path: 'prueba', component: PruebaComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
