import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimalAddComponent } from "../animals/animal-add.component";


const animalRoutes: Routes = [
  {
    path: 'addAnimal', component: AnimalAddComponent }
];

@NgModule({
  imports: [

    RouterModule.forChild(animalRoutes),],
  exports:[RouterModule]})
export class AnimalRoutingModule{

}