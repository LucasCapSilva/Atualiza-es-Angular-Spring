import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin : UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router : Router

  ) { }

  entrar(){
   
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp
      environment.token = this.userLogin.token
      environment.admin = this.userLogin.admin
      console.log(environment.token)
      console.log(environment.admin)
      this.router.navigate(['/feed'])
    })
  }

  ngOnInit(){
  }

}
