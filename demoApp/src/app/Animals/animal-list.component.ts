import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {  Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { AnimalService } from '../shared/animal.service';

import * as AnimalActions from '../state/animals/animal.actions'
import { Location } from '@angular/common';
import { getCurrentAnimal, getError, getAnimals } from '../state/animals/animal.selectors';
import { State } from '../state/animals/animal.state';
import { Animal } from './animal';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalsListComponent implements OnInit ,OnDestroy {
errorMessage:string='';
sub!:Subscription;
animal!:Animal;
animals:Animal[]=[];
pageTitle:string="Animal List "
filteredAnimals:Animal[]=[];
selectedAnimal!:Animal | null;
filterValue!:string;
href:string='';

//******************** declared below are observables for which we will use async pipe in template , no sub/unsub*/
animals$!:Observable<Animal[]>;
selectedAnimal$!:Observable<any>;
errorMessage$!: Observable<string>;

//*************** */
dataReceived=this.animalService.getAnimals();
obsAnimals$!:Observable<Animal[]>;
@Output() OnAnimalSelection:EventEmitter<Animal>=new EventEmitter<Animal>();

  constructor(private animalService:AnimalService,
    private router:Router,private store:Store<State>,private location:Location){ }


  ngOnInit(): void {
    this.href=this.router.url;
    // console.log(this.href);
    // //sub object is initialized
    //    this.obsAnimals$=this.animalService.getAnimals();
    //    /*.subscribe(
    //      (response)=>{

    //      console.log(response);
    //      this.animals=response;
    //      this.filteredAnimals = this.animals;

    //    },
    //    err=>{this.errorMessage=err;
    //     console.log(err);
    //    }
    //    );*/

      //  console.log(this.selectedAnimal);
      //  this.animalService.selectedAnimalChanges$.
      //  subscribe(currentAnimal=>{this.selectedAnimal=currentAnimal;
      // });
   // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    this.animals$ = this.store.select(getAnimals);
    this.animals$.subscribe(resp=>this.filteredAnimals=resp);
    // Do NOT subscribe here because it uses an async pipe
    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(AnimalActions.loadAnimals());

    // Do NOT subscribe here because it uses an async pipe
    this.selectedAnimal$ = this.store.select(getCurrentAnimal);

     }

     ngOnDestroy(): void {
       //this.sub.unsubscribe();
  }



   filterData(val:string){




    this.filteredAnimals=this.animals.filter((p)=>p.category===val);
  }


  onRatingClicked(msg:string):void{
    this.pageTitle='My Angular App ' +msg;
  }

 onSelect(p:Animal){
  this.OnAnimalSelection.emit(p);
 }

newAnimal():void{
   console.log('in new animal');
   console.log(this.href)
  // this.animalService.changeSelectedAnimal(this.animalService.newAnimal());
  // console.log('back to newAnimal from service ');
  this.store.dispatch(AnimalActions.initializeCurrentAnimal());
  console.log(this.href)
   this.router.navigate([this.href,'addAnimal']);
}
 animalSelected(animal:Animal):void{
  //this.animalService.changeSelectedAnimal(animal);
this.store.dispatch(AnimalActions.setCurrentAnimal({currentAnimalId:animal.id}));
}
  getAnimalById(id:number):Animal{
    this.animalService.getAnimalById(id).subscribe(resp=>this.animal=resp);
    return this.animal;
  }
}