import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { checkInput } from 'src/utils/inputCheck';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {
isopen = false
value : string = ""
 search  = document.getElementById("search")
login : boolean = false;
user : string = ""
cart = JSON.parse(sessionStorage.getItem("cart") || "[]")
constructor(private router : Router , private activatedRoute : ActivatedRoute, private authService : AuthServiceService ){

}
Search(value : string) : void{
  if(checkInput(value)){
    this.router.navigate(["search"],{queryParams:{query:value},queryParamsHandling:'merge',relativeTo:this.activatedRoute})
  }else{alert("Please Enter Something valid")}
  
}
handleSearch(event : Event) : void{
  if(event instanceof KeyboardEvent){
    if(event.key === "Enter"){
     if(checkInput(this.value)){
      this.router.navigate(["search"],{queryParams:{query:this.value},queryParamsHandling:'merge',relativeTo:this.activatedRoute})
     }else{alert("Please Enter Something valid")}
    }
  }
  
}
logout() : void{
  this.authService.ngOnDestroy()
  this.router.navigate(["login"])
}
ngOnInit(): void {
    console.log(this.activatedRoute.toString())
    this.login = this.authService.isLoggedIn()
    this.user  = sessionStorage.getItem('username') || ""
   
}
}
