import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PentHouseComponent2 } from './pent-house/pent-house.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlagListComponent } from './flats/flag-list.component';
import { AnimalListComponent } from './Animals/animal-list.component';
import { FormsModule, NgModel } from '@angular/forms';
import { ProductComponent } from './Product/product.component';
import { StarComponent } from './star/star.component';
import { ShoppingCartComponent } from './shoppingCart/shopping-cart.component';
import {HttpClientModule} from '@angular/common/http';
import { EventBootComponent } from './event/event.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DBServie } from 'shared/inmemoryeventdbservice';
import { RepeatDataPipe } from './repeat.pipe';





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
   RepeatDataPipe

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DBServie)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
