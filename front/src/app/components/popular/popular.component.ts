import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/types/type';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnChanges {
@Input()  product : Product ={
  name: "",
  description: "",
  price: 0,
  image: "",
  id: 0,
  starts: 0,
  quantity: 0
}
stars: number[] = [1];
type: string = "favorite_border";

constructor(private router : Router){
  
}
addToCart(){
  const cart : Product[] = JSON.parse(sessionStorage.getItem("cart") || "[]");
  if(cart.filter(item => item.id === this.product.id).length === 0){
    this.product.quantity = 1;
    cart.push(this.product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
   
  }

  

   
}
changeType() {
  if (this.type === "favorite_border") {
    this.type = "favorite";
  } else {
    this.type = "favorite_border";
  }
}
ngOnChanges(changes: SimpleChanges): void {
    if(changes['product'].currentValue){
      this.stars = Array.from({length: changes['product'].currentValue.starts}, (_, i) => i + 1);
      console.log(this.stars)
    }
}
}

