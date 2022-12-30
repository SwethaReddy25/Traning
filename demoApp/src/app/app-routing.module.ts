import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AnimalDetailsComponent } from './Animals/animal-detail/animal-detail.component';
import { AnimalListComponent } from './Animals/animal-list.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
 import { TrusteeComponent } from './trustee/trustee.component';

const routes: Routes = [{path:'',component:HomeComponent},{path:'AboutUs',component:AboutUsComponent},
 {path:'animals',component:AnimalListComponent},{path:'animals/animal/:id',component:AnimalDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
