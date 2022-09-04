import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control.service';
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
  

  constructor(
    public controlService: ControlService,
    private router: Router) { }

    

    ngOnInit(): void {

      let date: Date = new Date();
      let mes = date.getMonth() + 1;
      var fecha = date.getFullYear() + "-" + mes + "-" + date.getDate();

      var hora = date.getHours() + ":" + date.getHours() + ":" + date.getSeconds();

      this.form = new FormGroup({
        id_empleado: new FormControl('', [Validators.required]),
        fecha: new FormControl(fecha, [Validators.required]),
        hora: new FormControl(hora, [Validators.required])
      });
    }
       
    /**
     * Write code on Method
     *
     * @return response()
     */
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
        this.controlService.create(this.form.value).subscribe((res:any) => { 
             console.log('Marcaje corecto!');
             this.ok();
             this.router.navigateByUrl('control/create');
        })

   

      
        
      
      
    }
    
    ok(){
        
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Marcaje correcto',
        showConfirmButton: false,
        timer: 800
      })
      
    }
    error(){
        
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'No existe usuario',
        showConfirmButton: false,
        timer: 1500
      })
      
    }

}
