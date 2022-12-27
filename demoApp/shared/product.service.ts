import { Injectable } from "@angular/core";
import { ProductComponent } from "src/app/Product/product.component";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";



@Injectable({
    providedIn:'root'
})
export class ProductService{
    constructor(private http:HttpClient){}
     url:string='../api/products.json';

    getProduct():Observable<Product[]>{
        return (this.http.get<Product[]>(`${this.url}`))
    }

}
enum Category{
    Kitchen='kitchen',
    Electric='electric',
    HouseHold='houseHold'
  }
  interface Product{
    id:number;
    name:string;
    price:string;
    imageUrl:string;
    rating:number,
    category:Category;
  }
  