import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormEmpresaComponent } from './empresa/form-empresa/form-empresa.component';
import { CargaDatosComponent } from './carga-datos/carga-datos.component';
import { ContainerComponent } from './container/container.component';
import { TiposDeEmpresasComponent } from './tipos-de-empresas/tipos-de-empresas.component';
import { FormTiposComponent } from './tipos-de-empresas/form-tipos/form-tipos.component';
import { ListTiposComponent } from './tipos-de-empresas/list-tipos/list-tipos.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ListEmpresasComponent } from './empresa/list-empresas/list-empresas.component';

@NgModule({
  declarations: [
   AppComponent,
   FormEmpresaComponent,
   ContainerComponent,
   TiposDeEmpresasComponent,
   FormTiposComponent,
   ListTiposComponent,
   ListEmpresasComponent,
   EmpresaComponent,
   CargaDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
