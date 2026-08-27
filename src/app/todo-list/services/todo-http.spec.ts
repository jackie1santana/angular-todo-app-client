import { TestBed } from '@angular/core/testing';

import { TodoHttp } from './todo-http';

describe('TodoHttp', () => {
  let service: TodoHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
