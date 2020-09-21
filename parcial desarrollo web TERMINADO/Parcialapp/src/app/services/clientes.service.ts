import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './../models/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private url = 'http://localhost:3000/';

  constructor(private httpCliente: HttpClient) { }
  getClientres(): Observable<Cliente[]> {
    return this.httpCliente.get<Cliente[]>(this.url + 'clientes');
  }
}
