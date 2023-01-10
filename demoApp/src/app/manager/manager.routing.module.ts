import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManagerHomeComponent } from "./manager-home.component";

const managerRoutes: Routes = [
    {
      path:'',redirectTo:'/manager/home',pathMatch:'full'
    },

    {
      path: 'home', component: ManagerHomeComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(managerRoutes),],
  exports:[RouterModule]})
export class ManagerRoutingModule{

}

