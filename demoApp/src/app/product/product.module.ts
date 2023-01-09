import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product.routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from '../products/products-list.component';
import { ProductAddComponent } from '../products/product-add.component';
import { StarComponent } from '../star/star.component';
import { productReducer } from '../state/products/product.reducer';
import { ProductEffects } from '../state/products/product.effects';
import { ProductShellComponent } from '../products/product-shell.component';



@NgModule({
  declarations: [ProductsListComponent,
  ProductAddComponent,
  ProductShellComponent,

    
],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    ProductRoutingModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects])]
})
export class ProductModule { }