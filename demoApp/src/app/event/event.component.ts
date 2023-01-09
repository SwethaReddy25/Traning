import { animate, state, style, transition, trigger } from '@angular/animations';
import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventService } from '../shared/event.service';
import { IEvent } from "./event";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  animations:[

    trigger('enlarge',[
      state('start',style({
       width:'150px' , height:'100px'
      })),
    state('end',style({
      height:'150px',width:'200px'
    })),
     //transition('start=>end',animate('1s linear')),
    transition('start=>end',[
      animate('1s 2s')
    ]),
    transition('end=>start',[
      animate('1s 2s')
    ]),
    ])]

  })
export class EventBootComponent implements OnInit {
 

  constructor(private eventService: EventService) { };

  eventList!: IEvent[] ;
  filteredList!:IEvent[];
subs!:Subscription;
isHovering:boolean= false;

  ngOnInit(): void {
    this.subs=this.eventService.getEvents().subscribe(

      (response:IEvent[]) => {
        this.eventList = (response);
        this.filteredList=response;    
        console.log((this.eventList));


      }
    );
  
    }
    applyAnimation($event: any){
      this.isHovering=!this.isHovering;
      

   }
   currentState =['start','end'];
   clickAnimation(index:number){
    console.log(index);
    this.currentState[index] = this.currentState[index] === 'start' ? 'end' :'start';
  
   }
  }