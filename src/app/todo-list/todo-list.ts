import { Component, Input, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { TodoHttpService, JsonPlaceholderTodo } from './services/todo-http';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit {

  private readonly TodoHttpService = inject(TodoHttpService);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

public ngOnInit(): void {
  this.loadTodos()
      console.log("passed to other comp", this.todos)
}
@Input() public todos: any[] = []

public jsonTodos: JsonPlaceholderTodo[] = []

public loadTodos (): void{
  this.TodoHttpService.getTodos().subscribe({
    next: (todos) => {
      //@ts-ignore
      this.todos = todos
      this.changeDetectorRef.detectChanges();

      console.log(this.todos)
    }
  })
}




}
