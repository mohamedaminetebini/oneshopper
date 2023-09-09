import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { ProductApiService } from 'src/app/product-api.service';
import { Product } from 'src/types/type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username = sessionStorage.getItem('username') || ""
  products : Product[] = []
  isOpen = false;
  name = ""
  description = ""
  price : string = "0"
  quantity : string = "0"
  constructor( private productApiService : ProductApiService , private router : Router, private authService : AuthServiceService) { }
 async  delete(product :any){
    try {
      const response = await this.productApiService.deleteProduct(product.id,window.sessionStorage.getItem('token')!)
      if(response.status === 200){
        this.products = this.products.filter((item : Product) => item.id !== product.id)
      }
    } catch (error) {
      console.log(error)
    }
    
    
  }
  async getProducts(){
   try {
    const response = await this.productApiService.getProducts()
    this.products = response.data as Product[];
   } catch (error) {
      console.log(error)
   }
  }
  logout() : void{
    this.authService.ngOnDestroy()
    this.router.navigate(["login"])
  }
  async  save(){
    try {
        if(this.name === "" || this.description === "" || this.price === "" || this.quantity === ""){
          alert("please fill all fields")
          return
        }
       const filtred = this.products.filter((item : Product) => item.name === this.name);
       if(filtred.length > 0){
         alert("product already exist")
         return
       } 
       this.products.push({
        name:this.name,
        description:this.description,
        price:parseInt(this.price),
        quantity:parseInt(this.quantity),
        image:"../../../assets/airpods.png",
        starts:4,
        id:3
      })
       const res = await this.productApiService.addProduct({name:this.name,description:this.description,image:"../../../assets/airpods.png",price:parseInt(this.price),quantity:parseInt(this.quantity)},window.sessionStorage.getItem('token')!)
        this.isOpen = false
         console.log(res)
      } catch (error) {
      console.log(error)
    }
  }
  ngOnInit(): void {
    this.getProducts()
  }
  
}
