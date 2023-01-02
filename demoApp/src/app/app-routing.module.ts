import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AnimalAddComponent } from './Animals/animal-add.component';
import { AnimalDetailsComponent } from './Animals/animal-detail/animal-detail.component';
import { AnimalsListComponent } from './Animals/animal-list.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { ProductAddComponent } from './Product/product-add.component';
import { ProductsListComponent } from './Product/products-list.component';
 import { TrusteeComponent } from './trustee/trustee.component';

const routes: Routes = [{path:'',component:HomeComponent},{path:'AboutUs',component:AboutUsComponent},
 {path:'animals',component:AnimalsListComponent},{path:'animals/animal/:id',component:AnimalDetailsComponent},
 {path:'animals',component:AnimalsListComponent,
children:[{path:'addAnimal',component:AnimalAddComponent},]},
 {path:'products',component:ProductsListComponent,
children:[{path:'addProduct',component:ProductAddComponent},]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
