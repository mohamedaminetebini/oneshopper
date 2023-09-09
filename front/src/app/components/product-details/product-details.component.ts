import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AxiosResponse } from 'axios';
import { ProductApiService } from 'src/app/product-api.service';
import { Product } from 'src/types/type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
stars : number[] = [1,2,3,4,5]
product : Product ={
  name: "",
  description: "",
  price: 0,
  image: "",
  id: 0,
  starts: 0,
  quantity: 0
}
private qty = 1


constructor(private activatedRoute: ActivatedRoute,private productApiService: ProductApiService ) { }
  



public getQty() : number{
  return this.qty
}
public setQty(qty:number){
  this.qty = qty
}
increment(){
  this.qty += 1
}
decrement(){
 if(this.qty > 1){
  this.qty -= 1
}

}
async getById (id : number) : Promise<void> {
  try {

    const response : AxiosResponse<Product>  = await  this.productApiService.getProductById(id);
      if(response.status === 200){
        this.product = response.data;
        console.log(this.product);
        document.title = this.product.name
      }else if(response.status === 404){
        
        console.log("not found");
      }
  } catch (error) {
    console.log(error)
  }
}
ngOnInit(): void {
    this.getById(this.activatedRoute.snapshot.params['id'])
    

   
}

}