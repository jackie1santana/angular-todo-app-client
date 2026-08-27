import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface JsonPlaceholderTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  private readonly apiUrl = 'http://localhost:8080/api/v1/todos';

    public constructor(private readonly http: HttpClient) {

  }

  public getTodos(): Observable<JsonPlaceholderTodo[]>{
    return this.http.get<JsonPlaceholderTodo[]>(this.apiUrl)
  }
}
