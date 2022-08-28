import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmplyees() {
    return [
      {"id": 1, "name": "Andrew", "age": 30},
      {"id": 2, "name": "James", "age": 20},
      {"id": 3, "name": "David", "age": 40},
      {"id": 4, "name": "Chris", "age": 50}
    ]
  }
}
