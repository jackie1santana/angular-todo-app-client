import { Component, signal } from '@angular/core';
import { AddItem } from './add-item/add-item';
import { RouterOutlet } from '@angular/router';
import { TodoList } from './todo-list/todo-list';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from './app-interface';
import {form, FormField} from '@angular/forms/signals'

@Component({
  selector: 'app-root',
  imports: [AddItem, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
todos: any[] = []

  ngOnInit(){

  }

  passTodoItem(todo: string): void{
    console.log("passed todo", event)
    this.todos = [...this.todos, todo]
  }
}
