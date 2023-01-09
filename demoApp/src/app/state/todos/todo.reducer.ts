
import { createReducer, on } from '@ngrx/store';
import { addTodo, LoadTodoFailure, loadTodos, LoadTodoSuccess, removeTodo } from './todo.action';
import { initialState } from './todo.state';



export const todoReducer = createReducer(
initialState,
on(addTodo,(state,{content})=>({

    ...state,
    todos:[...state.todos,{id:Date.now().toString(),content:content}],
})),

on(removeTodo,(state,{id})=>({
  ...state,
  todos:state.todos.filter((todo)=>todo.id !== id),
})),

on(loadTodos,(state)=>({
  ...state,
  status:'loading'
})),

on(LoadTodoSuccess,(state , {todos})=>({
  ...state,
  todos,
  error:'',
  status:'success'
})) ,

on(LoadTodoFailure,(state,{error})=>({
...state,
error:error,
status:'error'

}))



);