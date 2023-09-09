import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  AxiosError, AxiosResponse } from 'axios';
import { SearchApiService } from 'src/app/search-api.service';
import { Product } from 'src/types/type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  param : string = "";
  filtredData : Product[] = [];
 Data : Product[] = [];
 filter : string ="Sort By"
 priceRange : number = 10000
 query : string = ""
  constructor(private route : ActivatedRoute,private searchApiService : SearchApiService  ) { }

  async searchFunc (search : string) : Promise<void> {
    try {
        
      const response : AxiosResponse<Product[]>  = await  this.searchApiService.getSearch(search);
        if(response.status === 200){
          if(response.data.length>0){
            this.Data = response.data;
            this.filtredData = response.data;
            console.log(this.Data);
          }else{
            this.Data =[]
            console.log("not found");
          }
          console.log(this.Data);
        }else if(response.status === 404){
          this.Data =[]
          console.log("not found");
        }
    } catch (error) {
      if(error instanceof AxiosError){
        if(error.response?.status===404){
          this.Data =[]
          console.log("not found");
        }

      }
    }
  }
chnageFilter(event : Event) : void{
  this.filter = (event.target as HTMLSelectElement).value;
  console.log(this.filter)
  switch(this.filter){
    case "Min Price": {
      this.Data = this.Data.sort((a,b) => (a.price > b.price) ? 1 : -1);
      break;
    }
    case "Max Price": {
      this.Data = this.Data.sort((a,b) => (a.price < b.price) ? 1 : -1);
      break;
    }
    case "A-Z": {
      this.Data = this.Data.sort((a,b) => (a.name > b.name) ? 1 : -1);
      break;
    }
    case "Z-A": {
      this.Data = this.Data.sort((a,b) => (a.name < b.name) ? 1 : -1);
      break;
    }
    default : {
      break;
    }
  }
}
onPriceRangeChange(event : Event) : void{;
  this.Data = this.filtredData.filter((product) => {
    return product.price <= this.priceRange
  })
}
 ngOnInit(): void {
       this.route.queryParams.subscribe(params => {
         this.searchFunc(params['query']);
       })
       this.query = this.route.snapshot.queryParams['query']
      
  }
}
