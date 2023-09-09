import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
import { Product } from 'src/types/type';
import { checkExpiryDate, checkNumber } from 'src/utils/inputCheck';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.css']
})
export class ChekoutComponent implements OnInit {
  selectedOption: string =""
  items : Product[] = []
  type="Credit card"
  cardNumber : string = ""
  cardHolder : string = ""
  expiryDate : string = ""
  cvv : string = ""

 constructor(private userService : UserServiceService , private router : Router) {

 }
 public getTotal(){
return this.items.reduce((a,b)=>a+b.price,0)
 }
  onOptionChange(option: string) {
    this.selectedOption = option;
    console.log(this.selectedOption)
  }
 async  onSubmit(){
    if(this.cardNumber === "" || this.cardHolder === "" || this.expiryDate === "" || this.cvv === ""){
      alert("please fill all fields")
      return
    }else if(checkNumber(this.cardNumber) === false  || checkNumber(this.cvv) === false){
      alert("card number or cvv is not valid")
      return
    }else if(checkExpiryDate(this.expiryDate) === false){
      alert("expiry date is not valid")
      return
    }
      try {
        
        const cart = (JSON.parse(sessionStorage.getItem("cart")!) as Product[] ).map((item : Product) => {
          return {
            image:item.image,
            starts:item.starts,
            name:item.name,
            price:item.price,
            quantity:item.quantity,
            description:item.description
          }
        })
        const response = await this.userService.saveOrders({ 
          email:window.sessionStorage.getItem('email')!,
         products: cart!,
            type:this.type,
            cardNumber:this.cardNumber,
            cardHolder:this.cardHolder,
            expiryDate:this.expiryDate,
            cvv:this.cvv
        },window.sessionStorage.getItem('token')!)
        console.log(response)
        this.router.navigate(['/'])
        alert("order placed successfully")
      } catch (error) {
        console.log(error)
      }
  }
  ngOnInit(): void {
    this.items = JSON.parse(sessionStorage.getItem("cart") || "[]");
  }

}
