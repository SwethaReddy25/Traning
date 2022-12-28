import { Component, OnInit } from '@angular/core';
import { LoggingServie } from 'shared/logging.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private loggingService:LoggingServie){};
  data:number=10;
  name:string='swetha';

 
  thisFun(){
    this.loggingService.log("button is called");
    }

  

}
