import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingComponent implements OnInit {
  messageText:string='Welcome to angular content projection'
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }
