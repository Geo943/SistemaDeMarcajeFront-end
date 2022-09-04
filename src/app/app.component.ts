import { Component, Directive } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'ControlDePersonal';

  constructor(){
    
  }

  marcar(){
    document.location.assign('/control/create/');
  }

  login(){
    document.location.assign('/control/index/');
  }

  showModal(){
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
}
