import { CanActivateFn  } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let token = sessionStorage.getItem('token');
 if(token){
   return true;
 }
 else{
  window.location.assign('http://localhost:4200');
   return false;
 }
};
export const isLoggedIn: CanActivateFn = (route, state) => {
  let token = sessionStorage.getItem('token');
  if (token==null) {
    return true;
  } else {
    window.location.assign('http://localhost:4200');
    return false;
  }
};
