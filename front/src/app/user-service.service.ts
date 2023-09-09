import { Injectable } from '@angular/core';
import axios from 'axios';
import { Infos, UserInfo } from 'src/types/type';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

async saveData(data: Infos , token: string){
    return await axios.request({
      url:'http://localhost:8080/api/v1/users/infos',
      method:'POST',
      data:data
    ,
      headers:{
        "Content-Type": 'application/json',
        Authorization:`Bearer ${token}`,
        "Allow-Control-Allow-Origin": "*",
        Accept: "application/json",

      }
    })
  }
  async saveOrders(data: any , token: string){
    console.log(data)
    console.log(token)
    return await axios.request({
      url:'http://localhost:8080/api/v1/users/orders',
      method:'POST',
      data:data
    ,
      headers:{
        "Content-Type": 'application/json',
        Authorization:`Bearer ${token}`,
        "Allow-Control-Allow-Origin": "*",
        Accept: "application/json",
  }})

}
}