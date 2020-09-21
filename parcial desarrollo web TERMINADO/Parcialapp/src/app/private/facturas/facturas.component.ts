import { Component, OnInit } from '@angular/core';
import { FacturaService } from './../../services/factura.service';
import { Router } from '@angular/router';
import { Factura } from './../../models/factura';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturas: Factura[];
  cli: Cliente;
  constructor(private service: FacturaService, private routes: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('fact');
    this.service.getFacturas(JSON.parse(localStorage.getItem('cli')).id).subscribe(
      (res) => {
        this.facturas = res;
      }
    );

  }
  OnMostrar(i: Factura): void {
    localStorage.setItem('fact', JSON.stringify(i));
    this.routes.navigate(['facturas/detalle']);
  }

}
