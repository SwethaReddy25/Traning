import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadTodos } from '../state/todos/todo.action';
import { selectAllTodos } from '../state/todos/todo.selectors';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {
  public allTodos$:any =this.store.select(selectAllTodos);
  public todo='';
  constructor(private store:Store){}
  ngOnInit(): void {
    this.store.dispatch(loadTodos());

  }

  onSubmit(todoForm:NgForm){
   console.log(todoForm.value);
  }
   }

