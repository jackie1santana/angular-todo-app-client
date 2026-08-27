import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from '../todo-list/todo-list';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from '../app-interface';
import {form, FormField} from '@angular/forms/signals'


@Component({
  selector: 'app-add-item',
  imports: [ReactiveFormsModule, FormField],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
})
export class AddItem {
public readonly todoControl = new FormControl<string>('')

@Output() storeTodoItem = new EventEmitter<any>();

  todoState = signal<Array<User>>([{
    id: null,
    todo: '',
    completed: false
  }])

  // loginForm = form<User>(this.state)

  ngOnInit(){

  // console.log(this.loginForm.name)

  }

  onNgChanges(){

  }


  onSubmit(): void{
    const name = this.todoControl.value
    // Update the value programmatically
     //@ts-ignore
  // this.loginForm?.name().value.set('hey');
  //   console.log(this.loginForm.name().value())
  console.log(name)
  this.storeTodoItem.emit(name)
  }
}
