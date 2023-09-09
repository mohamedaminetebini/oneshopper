import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/types/type';

@Pipe({
  name: 'pricePipe'
})
export class PricePipePipe implements PipeTransform {

  transform(value: Product[],fil : number): Product[] {
    return value.filter(x => x.price <= fil);
  }

}
