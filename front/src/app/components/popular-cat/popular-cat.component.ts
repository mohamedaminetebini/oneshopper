import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-popular-cat',
  templateUrl: './popular-cat.component.html',
  styleUrls: ['./popular-cat.component.css']
})
export class PopularCatComponent {
  @Input() name: string="";
  @Input() image: string="";

  constructor(private router : Router, private activatedRoute : ActivatedRoute){} 
  

search(){
  this.router.navigate(["search"],{queryParams:{cat:this.name},queryParamsHandling:'merge',relativeTo:this.activatedRoute})
}
}
