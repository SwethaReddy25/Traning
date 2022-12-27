import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventService } from '../../../shared/event.service';
import { IEvent } from "./event";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventBootComponent implements OnInit {

  constructor(private eventService: EventService) { };

  eventList!: IEvent[] ;
  filteredList!:IEvent[];
subs!:Subscription;

  ngOnInit(): void {
    this.subs=this.eventService.getEvents().subscribe(

      (response:IEvent[]) => {
        this.eventList = (response);
        this.filteredList=response;    
        console.log((this.eventList));

      }
    );
  
    }
  }