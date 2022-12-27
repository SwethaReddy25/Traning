import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggingServie } from 'shared/logging.service';
import { ProductService } from 'shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {

  // productList=[];
  inp:string='';
title:string='';


constructor(private productService:ProductService,private logginService:LoggingServie){}


ngOnInit(): void {
    this.getFuntion();
  }
;


@Output() sendData:EventEmitter<Product>=new EventEmitter<Product>();


productList:Product[]=[];

getFuntion(){
this.productService.getProduct().subscribe((data:Product[])=>{
  this.productList=data;
})
}

filteredList:any=this.productList;

filter(){
  this.filteredList=[];
  for(let i=0;i<this.productList.length;i++){
    if(this.productList[i].name.includes(this.inp)){
      this.filteredList.push(this.productList[i]);
    }
  }
}


productSend:Product={
  id:0,
  name:"",
  price:"",
  imageUrl:"",
  rating:0,
  category:Category.Kitchen
};


outputEvent(product:Product){
  this.logginService.log(product);
  this.productSend=product;
  // this.sendData.emit(product);

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


