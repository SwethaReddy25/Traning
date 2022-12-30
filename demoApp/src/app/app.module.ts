import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PentHouseComponent2 } from './pent-house/pent-house.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlagListComponent } from './flats/flag-list.component';
import { AnimalListComponent } from './Animals/animal-list.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './Product/product.component';
import { StarComponent } from './star/star.component';
import { ShoppingCartComponent } from './shoppingCart/shopping-cart.component';
import {HttpClientModule} from '@angular/common/http';
import { EventBootComponent } from './event/event.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DBServie } from 'shared/inmemoryeventdbservice';
import { RepeatDataPipe } from './repeat.pipe';
import { TrusteeComponent } from './trustee/trustee.component';
import { BookComponent } from './book/book.component';
import { EmployeeArrayComponent } from './employee-array/employee-array.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AnimalDetailsComponent } from './Animals/animal-detail/animal-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    PentHouseComponent2,
    WelcomeComponent,
    FlagListComponent,
   AnimalListComponent,
   ProductComponent,
   StarComponent,
   ShoppingCartComponent,
   EventBootComponent,
   RepeatDataPipe,
   TrusteeComponent,
   BookComponent,
   EmployeeArrayComponent,
   HomeComponent,
   AboutUsComponent,
   AnimalDetailsComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DBServie),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
