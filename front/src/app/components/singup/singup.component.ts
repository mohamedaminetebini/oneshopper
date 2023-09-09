import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { checkEmail, checkUsername } from 'src/utils/inputCheck';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  email:string ="";
  password :string ="";
  username : string ="";
constructor(private AuthserviceService : AuthServiceService , private router : Router) {
  
}

async register(){
  if(checkUsername(this.username) === false){
    alert("username is not valid")
    return
  }
  if(checkEmail(this.email) === false ){
    alert("email is not valid")
    return
  }
 
  try {
    const res = await this.AuthserviceService.signUp({email:this.email,password:this.password,username:this.username})
    if(res.status === 200){
      window.sessionStorage.setItem('token',res.data.token)
      window.sessionStorage.setItem('username',res.data.username)
      window.sessionStorage.setItem('email',res.data.email)
      this.router.navigate(['/info'])
    }
  } catch (error) {
    console.log(error)
  }

}
}
