import { Injectable } from "@angular/core";
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { IEvent } from "src/app/event/event";



@Injectable({
    providedIn:'root'
})
export class DBServie implements InMemoryDbService {

    createDb() {
        
       const events: IEvent[]=[
        {
            "id":"101",
            "name":"BootCamp",
            "date":"2022-12-31",
            "time":"16-30-00",
            "price":399,
            "imageUrl": "#",
            "location": {
                "address":"Jai Jai Ram Muhalla",
                "city":"Kasganj",
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
            "id":"101",
            "name":"BootCamp",
            "date":"2022-12-31",
            "time":"16-30-00",
            "price":399,
            "imageUrl": "#",
            "location": {
                "address":"Jai Jai Ram Muhalla",
                "city":"Kasganj",
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
            "id":"101",
            "name":"BootCamp",
            "date":"2022-12-31",
            "time":"16-30-00",
            "price":399,
            "imageUrl": "#",
            "location": {
                "address":"Jai Jai Ram Muhalla",
                "city":"Kasganj",
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

       return {events};

       
    }


}



   