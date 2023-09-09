import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class SearchApiService {
baseURL : string = 'http://localhost:8080/api/v1/search';
  constructor() { }

  getSearch(search: string ) {
    
    return axios.get(this.baseURL, {params: {query: search}})
  }
}
