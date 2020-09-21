import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Detalle } from './../models/detalle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  private url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getDetalle(id: number): Observable<Detalle[]> {
    return this.http.get<Detalle[]>(this.url + 'facturas/' + id + '/productos');
  }

}
