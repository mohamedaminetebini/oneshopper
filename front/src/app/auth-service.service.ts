import { Injectable, OnDestroy } from '@angular/core';
import axios from 'axios';
import { Login, Register } from 'src/types/type';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements OnDestroy {

  constructor() { }

  signUp(user:Register){
    return  axios.request({
      url:'http://localhost:8080/api/v1/auth/register',
      method:'POST',
      data:user
    })
  }
 async signIn(user:Login){
    return await axios.post('http://localhost:8080/api/v1/auth/login',user)
  }
  isLoggedIn() {
    return sessionStorage.getItem('token') ? true : false
   }
 
   ngOnDestroy() {
     sessionStorage.removeItem('user');
     sessionStorage.removeItem('token');
   }
}
