import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AnimalAddComponent } from './animals/animal-add.component';
import { AnimalDetailsComponent } from './animals/animal-detail/animal-detail.component';
import { AnimalsListComponent } from './animals/animal-list.component';
import { BookComponent } from './book/book.component';
import { EventBootComponent } from './event/event.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ShellComponent } from './home/shell.component';
import { ManagerHomeComponent } from './manager/manager-home.component';
import { ToolbarComponent } from './myMat/toolbar.component';
import { ProductAddComponent } from './products/product-add.component';
import { ProductsListComponent } from './products/products-list.component';
 import { TrusteeComponent } from './trustee/trustee.component';
import { AuthGuard } from './user/auth-guard.service';
import { LoginComponent } from './user/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

// const routes: Routes = [{path:'',component:HomeComponent},{path:'AboutUs',component:AboutUsComponent},
//  {path:'animals',component:AnimalsListComponent},{path:'animals/animal/:id',component:AnimalDetailsComponent},
//  {path:'animals',component:AnimalsListComponent,
// children:[{path:'addAnimal',component:AnimalAddComponent},]},
//  {path:'products',component:ProductsListComponent,
// children:[{path:'addProduct',component:ProductAddComponent},]},
const routes:Routes=[{path:'',component:ToolbarComponent,
 children:[
  {path:'manager',redirectTo:'manager',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'manager',
component:ManagerHomeComponent,
canActivate:[AuthGuard],
// loadChildren:()=>import('../app/manager/manager.module').then(m=>m.ManagerModule)
 },
{path:'welcome',component:WelcomeComponent},
 {
  path:'products',
  component:ProductsListComponent,
  canActivate:[AuthGuard],
  loadChildren:()=>import('../app/product/product.module').then(m=>m.ProductModule)

 },
{
  path:'animals',
  component:AnimalsListComponent,
  canActivate:[AuthGuard],
  loadChildren:()=>import('../app/animal/animal.module').then(m=>m.AnimalModule)
},

{
  path:'events',
  component:EventBootComponent,
  canActivate:[AuthGuard]

},

{
  path:'form',
  component:FormComponent ,
  canActivate:[AuthGuard]

},

// {path:'',redirectTo:'welcome',pathMatch:'full'},

// {path:'**',component:PagenotfoundComponent}
{path:'todo',loadChildren:()=>import('./todo/todo.module').then((m)=>m.TodoModule),}
 ]}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
