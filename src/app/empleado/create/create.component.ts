import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;


  constructor(public empleadoService: EmpleadoService,
    private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      dpi: new FormControl('', [Validators.required]),
      id_departamento: new FormControl('', [Validators.required]),
      fecha_inicio_labores: new FormControl('', [Validators.required]),
      fecha_nacimiento: new FormControl('', [Validators.required])



    });
  }
  get f(){
    return this.form.controls;
  }
       
    /**
     * Write code on Method
     *
     * @return response()
     */
  submit(){
    console.log(this.form.value);
    this.empleadoService.create(this.form.value).subscribe((res:any) => {
         console.log('Marcaje corecto!');
         this.ok();
         this.router.navigateByUrl('control/create');
    })
    
  }

  ok(){
        
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Empleado agregado',
      showConfirmButton: false,
      timer: 800
    })
    
  }

}
