import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  msg:string='hello there'
  constructor() { console.log('Shell constructor');}

  ngOnDestroy(): void {

  console.log('shell destroyed');}

  ngOnInit(): void {

    console.log('in oninit');

  }
  ngOnChanges():void{

   console.log('shell component changes');

  }

  
  

}
