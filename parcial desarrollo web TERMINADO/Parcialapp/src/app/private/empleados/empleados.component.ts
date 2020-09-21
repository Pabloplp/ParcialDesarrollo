import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './../../services/empleado.service';
import { Empleado } from './../../models/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[];

  constructor(private empleadoservice: EmpleadoService) { }

  ngOnInit(): void {
    this.empleadoservice.getEmpleados().subscribe(
      (res)=>{
        this.empleados = res;
      }
    )
  }

}
