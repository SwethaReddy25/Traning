import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PentHouseComponent2 } from './pent-house/pent-house.component';
import { WelcomeComponent } from './welcome/welcome.component';


import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

import { ShoppingCartComponent } from './shoppingCart/shopping-cart.component';
import {HttpClientModule} from '@angular/common/http';
import { EventBootComponent } from './event/event.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DBServie } from 'src/app/inmemoryeventdbservice';
import { RepeatDataPipe } from './repeat.pipe';
import { TrusteeComponent } from './trustee/trustee.component';
import { BookComponent } from './book/book.component';
import { EmployeeArrayComponent } from './employee-array/employee-array.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { ShellComponent } from './home/shell.component';
import { LoginComponent } from './user/login.component';
import { MenuComponent } from './home/menu.component';
import { GreetingComponent } from './greetings/greetings.component';
import { CardListComponent } from './cards/cardlist.component';
import { CardComponent } from './cards/card.component';
import { CommonModule } from '@angular/common';
import { TodoModule } from './todo/todo.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FlatListComponent } from "./flats/flat-list.component";
import { MaterialModule } from './material-module/material-module.module';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 








@NgModule({
  declarations: [
    AppComponent,
    PentHouseComponent2,
    WelcomeComponent,
   
  
   ShoppingCartComponent,
   EventBootComponent,
   RepeatDataPipe,
   TrusteeComponent,
   BookComponent,
   EmployeeArrayComponent,
   HomeComponent,
   AboutUsComponent,
  
   ShellComponent,
   LoginComponent,
   MenuComponent,
   GreetingComponent,
   CardListComponent,
   CardComponent,
   
   FlatListComponent,
       FormComponent,
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DBServie),
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    CommonModule,
    EffectsModule.forRoot([])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

