import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaDatosComponent } from './carga-datos/carga-datos.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { TiposDeEmpresasComponent } from './tipos-de-empresas/tipos-de-empresas.component';
import { from } from 'rxjs';

 
const routes: Routes = [
  {path:"empresa", component: EmpresaComponent },
  {path:"carga", component: CargaDatosComponent },
  {path:"tipo", component: TiposDeEmpresasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
