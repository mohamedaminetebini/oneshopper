import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { checkEmail } from 'src/utils/inputCheck';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email:string ="";
password :string ="";
constructor(private AuthserviceService : AuthServiceService , private router : Router) {
  
}

async login(){
    if(checkEmail(this.email) === false){
      alert("email is not valid")
      return
    }
  try {

    const res = await this.AuthserviceService.signIn({email:this.email,password:this.password})
    if(res.status === 200){
     if(res.data.role==="User"){
      window.sessionStorage.setItem('token',res.data.token)
      window.sessionStorage.setItem('username',res.data.username)
      window.sessionStorage.setItem('email',res.data.email)
      this.router.navigate(['/home'])
     }
     else{
      window.sessionStorage.setItem('token',res.data.token)
      window.sessionStorage.setItem('username',res.data.username)
      window.sessionStorage.setItem('email',res.data.email)
      this.router.navigate(['/dashboard'])
     }
    }
  } catch (error) {
    console.log(error)
  }
}
}
