import { Injectable } from "@angular/core";



export class Animal{
    getAnimalById(id: number) {
      throw new Error('Method not implemented.');
    }



    id:number=0;

    name:string='';

    briefDescription:string='';

    imageUrl:string='';

    constructor (id:number,name:string, briefDescription:string,imageUrl:string){this.id=id;this.name=name;this.briefDescription=briefDescription;this.imageUrl=imageUrl}

}



@Injectable({

    providedIn:'root'

})

export class AnimalService{



    public getAnimals(){



     let animals:Animal[];



     animals=[

        new Animal(101,'Dog','Most Loved Animal','../../assets/download.jpeg'),

        new Animal(102,'Lion','Jungle King','../../assets/Lion_waiting_in_Namibia.jpg'),

        new Animal(103,'Elephant','The only animal who cant jump','../../assets/African-savanna-elephant.webp')



    ]

     return animals;

}



    getAnimalById(id:number){



      let animals:Animal[]=this.getAnimals();

      return animals.find(a=>a.id==id);

    }



    }