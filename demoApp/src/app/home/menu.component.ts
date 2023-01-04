import { Component, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
pageTitle:string='Online Shopping';

get isLoggedIn():boolean{ 

  return this.authservice.isLoggedIn();
}


get userName():string{


if(this.authservice.currentUser)

return this.authservice.currentUser?.userName;

return '';

}




constructor(private renderer:Renderer2 ,private router:Router,private authservice:AuthService,private viewref:ViewContainerRef){
  console.log('menu constructor')
}

  ngOnInit(): void {
    console.log('menu on init');
  }

  logOut():void{

    
    this.authservice.logOut();
    this.router.navigate(['/welcome']);

  }

  ngOnDestroy(): void {
    console.log('menu destroyed');}
    ngOnChanges():void{
     console.log('menu component changes');
    }

}
