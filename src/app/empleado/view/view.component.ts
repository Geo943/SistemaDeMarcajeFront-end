import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Empleado } from '../empleado';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id!: number;
  empleado!: Empleado;

  constructor(public empleadoService: EmpleadoService,
    private route: ActivatedRoute,  private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['empleadoId'];

    this.empleadoService.find(this.id).subscribe((data: Empleado)=>{
      this.empleado = data;
    }); 

    
  }

}
