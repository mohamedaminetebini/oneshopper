import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/types/type';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit , OnChanges {
  private cart: Product[] = [];

ngOnInit(): void {
     this.cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
}
getCart(){
  return this.cart
}
getTotal(){
  return this.cart.reduce((a,b)=>a+b.price,0)
}
ngOnChanges(changes: SimpleChanges): void {
    if(changes["cart"].currentValue){
      this.cart = changes["cart"].currentValue;
}
}}
