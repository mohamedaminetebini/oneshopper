import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
 @Input() name !: string ;
 @Input() options !: string[] ;
constructor() {
  
}

}
