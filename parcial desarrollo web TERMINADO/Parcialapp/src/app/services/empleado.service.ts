import { Empleado } from './../models/empleado';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private url = 'http://localhost:3000/';
  constructor(private httpCliente: HttpClient) { }

  getEmpleados(): Observable<Empleado[]> {
    return this.httpCliente.get<Empleado[]>(this.url + 'empleados');
  }
}
