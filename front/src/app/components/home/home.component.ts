import { Component, OnInit } from '@angular/core';
import { Categories, Filster, Product } from 'src/types/type';
import { ProductApiService } from 'src/app/product-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
   Data: Product[] = [];
 public FilterList : Filster[] = [{name:"products",options:["Shoe" ,"Bag" ,"T-shirt" ,"Watch"]}]; 
 categories : Categories[]= [{name : "Watch",img:"../../../assets/watch.png"},{name : "Shoes",img:"../../../assets/shoe.png"}]
 prodcuts: number[] = [1,2,3,4,5,6];
  constructor(private productApiService: ProductApiService) {
  
}

getProducts(){
  return this.productApiService.getProducts().then(response => {
    this.Data = (response.data as Product[]).slice(0,3);
    console.log(this.Data);
  }).catch(error => {
    console.log(error);
  })
  
}
ngOnInit(): void {
    this.getProducts();
}
}
