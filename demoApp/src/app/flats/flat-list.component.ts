import { Component, OnInit } from '@angular/core';
import { IFlat } from './flat';
@Component({

  selector:'flat-list',
  templateUrl:'./flat-list.component.html',
  styleUrls:['./flat-list.component.css']
})
export  class FlatListComponent implements OnInit{


  ngOnInit(): void {
    this.filteredFlats = this.flats;
  }
   _numRooms:number=0;
  showImage:boolean=true;
  imageWidth:number=50;
  imageHeight:number=50;
  imageMargin:number=5;
  filteredFlats:IFlat[]=[];


  annualRent=100000;

  get numRooms():number{
       return  this._numRooms;
  }

  set numRooms(val:number){

    this._numRooms=val;
    console.log('in setter ',val);
    this.filteredFlats=this.filterData(val);
    console.log('in setter',this.filteredFlats);
  }



  person={name:'max',
address:'pune'}
 //any data type array
  flats:IFlat[]=[
     {

    flatNumber:1,
    areaInSqFt:2000,
    numberOfRooms:3,
    numberOfBalconies:2,
    monthlyRent:20000,
    imageUrl:'../../assets/flat1.jpg'

  },{


      flatNumber:201,
      areaInSqFt:1500,
      numberOfRooms:3,
      numberOfBalconies:2,
      monthlyRent:25000,
      imageUrl:'../../assets/flat2.jpg'



  },{


      flatNumber:302,
      areaInSqFt:1500,
      numberOfRooms:3,
      numberOfBalconies:2,
      monthlyRent:26000,
      imageUrl:'../../assets/flat3.jpg'


  } ]

imageVisibility():void{

  this.showImage= !this.showImage;
}


filterData(val:number):IFlat[]{
  val=this.numRooms;
  return this.flats.filter((flat:IFlat)=>flat.numberOfRooms==val);



}



}