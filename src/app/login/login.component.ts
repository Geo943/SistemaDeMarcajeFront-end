import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    usuario:"2020",
    pass:"123456"
  }

  constructor(
    private authService: AuthService,
    private router: Router
    ) { 

    }
    


  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
    this.authService.singin(this.user).subscribe((res:any) =>{
      console.log(res);
      localStorage.setItem('token',res.access_token);
      // this.router.navigate(['empleado']);
      if(res.access_token ==null){
        console.log('error en validacion token null geo')
        this.errorlogin();
      }else{
        this.router.navigate(['/empleado/index/']);
      }
     
      
    })
  }
  

  logout(){
    console.log("Si llego hasta logout");
    this.authService.singout().subscribe((res:any) =>{
      localStorage.clear();

      this.router.navigate(['login']);
  
    })
  }


  errorlogin(){
        
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'credenciales incorrctas',
      showConfirmButton: false,
      timer: 1000
    })
    
  }

 
}
