import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StarComponent } from '../star/star.component';
import { AnimalsListComponent } from '../animals/animal-list.component';
import { AnimalAddComponent } from '../animals/animal-add.component';
import { AnimalShellComponent } from '../animals/animal-shell.component';
import { AnimalRoutingModule } from './animal.routing.module';
import { animalReducer } from '../state/animals/animal.reducer';
import { AnimalEffects } from '../state/animals/animal.effects';




@NgModule({
  declarations: [   AnimalsListComponent,
  AnimalAddComponent,
  AnimalShellComponent, 
  StarComponent,
  
],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    AnimalRoutingModule,
    StoreModule.forFeature('animals', animalReducer),
    EffectsModule.forFeature([AnimalEffects])]
})
export class AnimalModule { }