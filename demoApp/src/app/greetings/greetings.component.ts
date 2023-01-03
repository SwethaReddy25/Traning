import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingComponent implements OnInit {
  messageText:string='Greetings to home page'
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }
