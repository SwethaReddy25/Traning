import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from '../../shared/product.service';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductAction from './product.actions';

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private productService: ProductService) { }

  loadProducts$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductAction.loadProducts),
        mergeMap(() => this.productService.getProducts()
          .pipe(
            map(products => ProductAction.loadProductsSuccess({ products })),
            catchError(error => of(ProductAction.loadProductsFailure({ error })))
          )
        )
      );
  });

  updateProduct$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductAction.updateProduct),
        concatMap(action =>
          this.productService.updateProduct(action.product)
            .pipe(
              map(product => ProductAction.updateProductSuccess({ product })),
              catchError(error => of(ProductAction.updateProductFailure({ error })))
            )
        )
      );
  });

  createProduct$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductAction.createProduct),
        concatMap(action =>
          this.productService.createProduct(action.product)
            .pipe(
              map(product => ProductAction.createProductSuccess({ product })),
              catchError(error => of(ProductAction.createProductFailure({ error })))
            )
        )
      );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductAction.deleteProduct),
        mergeMap(action =>
          this.productService.deleteProduct(action.productId).pipe(
            map(() => ProductAction.deleteProductSuccess({ productId: action.productId })),
            catchError(error => of(ProductAction.deleteProductFailure({ error })))
          )
        )
      );
  });
}