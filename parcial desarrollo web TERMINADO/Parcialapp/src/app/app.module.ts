import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { ClientesComponent } from './private/clientes/clientes.component';
import { EmpleadosComponent } from './private/empleados/empleados.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './../auth.guard';
import { InterceptorService } from './services/intercepto.service';
import { FacturasComponent } from './private/facturas/facturas.component';
import { DetalleComponent } from './private/detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientesComponent,
    EmpleadosComponent,
    FacturasComponent,
    DetalleComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
