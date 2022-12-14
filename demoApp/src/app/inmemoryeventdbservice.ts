import { Injectable } from "@angular/core";
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { IEvent } from "src/app/event/event";
import { Category, IProduct } from "src/app/products/product";
import { Todo } from "./todo/todo.model";



@Injectable({
    providedIn:'root'
})
export class DBServie implements InMemoryDbService {

    createDb() {
      const todos: Todo[]=[{id:'1',content:'hello'},{id:'2',content:'todo task'}];
        
       const events: IEvent[]=[
        {
           "id":"1",
           "name":"Avatar",
            "date":"2022-12-31",
            "time":"16-30-00",
            "price":400,
            "imageUrl": "../../assets/avatar.jpg",
            "location": {
               "address":"cine plant",
                "city":"Kompally",
                "country":"India"
                },
            "session" :[
               {
                   "id":"10101",
                   "name":"Batch 1",
                   "presenter":"Ms. Shalu Sharma",
                    "duration":"90",
                    "level":"Beginner",
                    "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
               },{
                   "id":"10102",
                   "name":"Batch 1",
                    "presenter":"Ms. Shalu Sharma",
                   "duration":"90",
                   "level":"Beginner",
                   "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
                }
            ]   
        },
        {
           "id":"2",
           "name":"Dhamaka",
            "date":"2022-12-31",
           "time":"16-30-00",
            "price":350,
           "imageUrl": "../../assets/dhamaka.jpg",
           "location": {
               "address":"prasad ",
               "city":"hyderbad",
               "country":"India"
               },
            "session" :[
                {
                   "id":"10101",
                   "name":"Batch 1",
                    "presenter":"Ms. Shalu Sharma",
                   "duration":"90",
                   "level":"Beginner",
                   "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
               }
           ]   
        },
        {
            "id":"3",
           "name":"HIT 2",
            "date":"2022-12-31",
            "time":"16-30-00",
            "price":350,
            "imageUrl": "../../assets/hit2.jpg",
           "location": {
                "address":"forum",
                "city":"Kutupally",
               "country":"India"
               },
           "session" :[
               {
                    "id":"10101",
                    "name":"Batch 1",
                   "presenter":"Ms. Shalu Sharma",
                   "duration":"90",
                   "level":"Beginner",
                   "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
               }
           ]   
       }
      ]

     

       

      const products:IProduct[]=[
        {
          "id":1,
          "name":"Gas Stove",
          "price":4000,
          "image":"../../assets/gasStove.webp",
          "rating":4,
          "category":Category.kitchen
          }
           ,{
          "id":2,
          "name":"Samsung Guru",
          "price":4000,
          "image":"../../assets/samg.jpg",
          "rating":3,
          "category":Category.electrics
        }
         ,{
          "id":3,
          "name":"Nokia 1100",
          "price":3200,
          "image":"../../assets/nokia1100.jpeg",
          "rating":2,
          "category":Category.electrics
        }
        ,{
          "id":4,
          "name":"Mop",
          "price":1500,
          "image":"../../assets/mop.webp",
          "rating":5,
          "category":Category.electrics
        }
         ,{
          "id":5,
          "name":"Chimney",
          "price":40000,
          "image":"../../assets/chimney.jpeg",
          "rating":3.5,
          "category":Category.kitchen
        }
      ]

  let animals = [
    {
      "id":1,
  
      "name":"Lion",
  
      "briefDescription":"King of Jungle",
  
      "image":"../../assets/Lion_waiting_in_Namibia.jpg",
  
      "physicalStrength":4,
  
      "color":"Yelloish Orange",
  
      "category":"Category.wild"
  
      }
  
       ,{
  
      "id":2,
  
      "name":"Dog",
  
      "briefDescription":"King of Streets",
  
      "image":"../../assets/g",
  
      "physicalStrength":2,
  
      "color":"Brown",
  
      "category":"Category.domestic"
  
    }
  
     ,{
  
      "id":3,
  
      "name":"Elephant",
  
      "briefDescription":"Silent Killer",
  
      "image":"../../assets/African-savanna-elephant.webp",
  
      "physicalStrength":1,
  
      "color":"White/Black",
  
      "category":"Category.domestic"
    }
  ]
  
  return {products,animals,todos,events};
       
    }


}


   