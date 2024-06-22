import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // setting the base url for api 
  baseUrl ='https://localhost:7800/api/'
  constructor(private http:HttpClient) { }

  // method to load the employees
  loadEmployees(){
    return this.http.get(this.baseUrl + 'Employee/employeeslist');
  }
}
