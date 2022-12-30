import { DatePipe } from '@angular/common';

import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormatWidth } from '@angular/common';


@Component({

  selector: 'app-book',

  templateUrl: './book.component.html',

  styleUrls: ['./book.component.css']

})

export class BookComponent implements OnInit {



  bookForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){

   

  }




  ngOnInit(): void {

    this.bookForm = this.formBuilder.group({

      books:this.formBuilder.array([])}

    );

  }

 

  books():FormArray{

    return this.bookForm.get("books") as FormArray;

  }



  newBook():FormGroup{

    return this.formBuilder.group({

      id:['1',[Validators.required,Validators.max(100)]],

      title:['Elements',[Validators.required,Validators.minLength(5)]],

   

      author:this.formBuilder.group({

        authorName:['R.S. Agarwal',[Validators.required,Validators.minLength(5)]],

        authorEmail:['rsagarwal@gmail.com',[Validators.required]]



      }),

      dateOf:["2022-02-02",[Validators.required]],

      publishers:this.formBuilder.array([])

    });

  }




  addBook(){

    this.books().push(this.newBook());

  }



  removeBook(bookIndex:number){

    this.books().removeAt(bookIndex);

  }



  bookPublishers(bookIndex:number):FormArray{

    return this.books().at(bookIndex).get("publishers") as FormArray;

  }




 

newPublisher():FormGroup{

  return this.formBuilder.group({

    publisherName:'',

    publishersEmail:'',

    publishedDate:''

  });

}



addBookPublish(bookIndex:number){

  this.bookPublishers(bookIndex).push(this.newPublisher());




}

removeBookPublish(bookIndex:number,publisherIndex:number){

this.bookPublishers(bookIndex).removeAt(publisherIndex);

}





  onSubmit(){

    console.log(this.bookForm.value);



  }



}