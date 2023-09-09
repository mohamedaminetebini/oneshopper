import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  baseURL : string = 'http://localhost:8080/api/v1/products';
  constructor() {
    axios.defaults.headers['Content-Type'] = 'application/json';
   }

  getProducts() {
    return axios.request({
      method: 'GET',
      url: this.baseURL
    })
  }
  getProductById(id: number) {
    return axios.get(`${this.baseURL}/${id}`)
    
  }
  addProduct(product: any,token:string) {
    return axios.post(this.baseURL+"/add", {...product,image:"../../../assets/airpods.png",
    starts:4},{headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json',
        "Allow-Control-Allow-Origin": "*",
        Accept: "application/json",
    }})
  }
  async  deleteProduct(id: number , token:string) {
    return  await axios.post(`${this.baseURL}/delete/${id}`
    ,{},{headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json',
        "Allow-Control-Allow-Origin": "*",
        Accept: "application/json",
    }}
    )
  }
}
