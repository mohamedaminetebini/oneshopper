import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-informatione',
  templateUrl: './informatione.component.html',
  styleUrls: ['./informatione.component.css']
})
export class InformationeComponent {
  firstName = '';
  lastName = '';
  address = '';
  city = '';
  state = '';
  zipCode = '';
  country = '';
  phoneNumber = '';

  constructor(private userService : UserServiceService , private router : Router) { }
 async handleSave(){
   try {
    if(this.firstName === "" || this.lastName === "" || this.address === "" || this.city === "" || this.state === "" || this.zipCode === "" || this.country === "" || this.phoneNumber === ""){
      alert("please fill all fields")
      return
    }
    console.log(window.sessionStorage.getItem('token'))
      const res = await this.userService.saveData({
        email:window.sessionStorage.getItem('email')!,
        firstname:this.firstName,
        lastname:this.lastName,
        address:this.address,
        city:this.city,
        state:this.state,
        zipcode:this.zipCode,
        country:this.country,
        phoneNumber:this.phoneNumber
    },window.sessionStorage.getItem('token')!)
    if(res.status===200){
      this.router.navigate(['/home'])
    }
    } catch (error) {
      console.log(error)
   }
  }
}
