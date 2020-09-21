import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura';
import { DetalleService } from './../../services/detalle.service';
import { Detalle } from 'src/app/models/detalle';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  detalle: Detalle[];
  fact: Factura;
  constructor(private service: DetalleService) { }

  ngOnInit(): void {
    this.service.getDetalle(JSON.parse(localStorage.getItem('fact')).id).subscribe(
      (res) => {
        this.detalle = res;
      }
    );
  }
}
