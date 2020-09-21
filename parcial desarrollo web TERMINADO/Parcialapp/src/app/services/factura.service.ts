import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getFacturas(id: number): Observable<Factura[]> {
    return this.http.get<Factura[]>(this.url + 'clientes/' + id + '/facturas');
  }

}
