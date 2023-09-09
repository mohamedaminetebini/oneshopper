import { Component , Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/types/type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnChanges {
  stars: number[] = [1, 2, 3, 4, 5];
  private qty : number = 1;

  @Input() product: Product = {
    name: "",
    description: "",
    price: 0,
    image: "",
    id: 0,
    starts: 0,
    quantity: 0
  }
  newprice : number = this.product.price
  constructor() {
    
  }
  public getQty(): number {
    return this.qty;
  }
  
  increment() {
    this.qty += 1;
    this.newprice = this.qty * this.product.price
    this.product.quantity = this.qty;
   let  cart : Product[] = JSON.parse(sessionStorage.getItem("cart") || "[]");

    cart = cart.filter((item : Product) => item.id !== this.product.id);
    cart.push({...this.product , price:this.newprice});
    window.sessionStorage.setItem("cart", JSON.stringify(cart));
  }
  decrement() {
    if (this.qty > 1) {
      this.qty -= 1;
      this.newprice = this.newprice-this.product.price
      this.product.quantity = this.qty;
      let cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
      cart = cart.filter((item : Product) => item.id !== this.product.id);
      cart.push({...this.product , price:this.newprice});
      window.sessionStorage.setItem("cart", JSON.stringify(cart));
    }
  }
  removeFromCart() {
     let cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
    cart = cart.filter((item : Product) => item.id !== this.product.id);

    sessionStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes["product"].currentValue){
      this.newprice = this.product.price
      console.log(this.stars)
    }
  }
}
