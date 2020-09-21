import { EmpleadosComponent } from './private/empleados/empleados.component';
import { ClientesComponent } from './private/clientes/clientes.component';
import { LoginComponent } from './public/login/login.component';
import { FacturasComponent } from './private/facturas/facturas.component';
import { DetalleComponent } from './private/detalle/detalle.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cliente', component: ClientesComponent, canActivate: [AuthGuard] },
  { path: 'empleado', component: EmpleadosComponent, canActivate: [AuthGuard] },
  { path: 'facturas', component: FacturasComponent, canActivate: [AuthGuard] },
  { path: 'facturas/detalle', component: DetalleComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
