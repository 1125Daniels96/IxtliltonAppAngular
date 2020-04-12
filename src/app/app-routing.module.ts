import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginPComponent } from './pages/login-p/login-p.component';
import { LoginDComponent } from './pages/login-d/login-d.component';
import { InfoDComponent } from './pages/info-d/info-d.component';
import { InfoPComponent } from './pages/info-p/info-p.component';
import { RegistroPComponent } from './pages/registro-p/registro-p.component';
import { RegistroDComponent } from './pages/registro-d/registro-d.component';
import { QrDocComponent } from './pages/qr-doc/qr-doc.component';
import { RecetaComponent } from './pages/receta/receta.component';
import { ConsultasPacienteComponent } from './pages/consultas-paciente/consultas-paciente.component';
import { QrPacienteComponent } from './pages/qr-paciente/qr-paciente.component';

const app_routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'Login.html', component: LoginPComponent},
    {path: 'logindoc.html', component: LoginDComponent},
    {path: 'InfoD.html', component: InfoDComponent},
    {path: 'InfoP.html', component: InfoPComponent},
    {path: 'Registro.html', component: RegistroPComponent},
    {path: 'registrodoc.html', component: RegistroDComponent},
    {path: 'qrd.html', component: QrDocComponent},
    {path: 'receta.html', component: RecetaComponent},
    {path: 'consultas-paciente.component.html', component: ConsultasPacienteComponent},
    {path: 'qr-paciente.component.html', component: QrPacienteComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];


@NgModule ({
    imports: [
        RouterModule.forRoot( app_routes )
    ],

    exports: [
        RouterModule
    ]

})

export class AppRoutingModule{

}