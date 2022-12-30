import { Component } from '@angular/core';

import { NgForm, NgModel } from '@angular/forms';

import { Animal, AnimalService } from './animal';



@Component({

  selector: 'app-animal-list',

  templateUrl: './animal-list.component.html',

  styleUrls: ['./animal-list.component.css']

})

export class AnimalListComponent {

 animals:Animal[]=[];



 constructor(private service:AnimalService) { }



 ngOnInit(): void {

  this.animals=this.service.getAnimals();
console.log(this.animals);


}



}
