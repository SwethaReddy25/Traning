import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isSuccess } from 'angular-in-memory-web-api';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  title='Book Form';
  bookForm!: FormGroup;
   constructor(private formBuilder:FormBuilder) {
    //step 1 :you have to create form model
    this.bookForm=this.formBuilder.group({

         id:['1',[Validators.required,Validators.max(100)]],
         bookName:['Harry Potter',[Validators.required,Validators.minLength(4)]],
      
         author:this.formBuilder.group({
          
          authorName:['J.K. Rowling',[Validators.required]],
          authorEmail:['jkrowling@gmail.com',[Validators.required,Validators.email]],

    
         }),
         dop:['',[Validators.required]]

    })
    

  }
  get id(){

    return this.bookForm.get("id");

  }



  get bookName(){

    return this.bookForm.get("bookName");

  }



  get authorName(){

    return this.bookForm.get('author')?.get("authorName");



  }



  get authorEmail(){

    return this.bookForm.get('author')?.get("authorEmail");

  }



 

  get dop(){



   return this.bookForm.get("dop");



  }
  ngOnInit(): void {

  }



  onSubmit(){
    console.log("Success");
    console.log(this.bookForm.value);

  }
}
