import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ControlModule } from './control/control.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { TipousuarioModule } from './tipousuario/tipousuario.module';

import { LoginComponent } from './login/login.component';


//se agrega modulo para toma de datos (como inyeccion )
import {FormsModule} from '@angular/forms'
import { TokenInterceptorService } from './services/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ControlModule,
    EmpleadoModule,
    DepartamentoModule,
    TipousuarioModule,
    HttpClientModule,
    //modulo de forms
    FormsModule
    
  ],
  providers: [
    //Token Interceptor
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}


