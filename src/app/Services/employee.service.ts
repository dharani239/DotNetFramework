import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 
  url:string="http://localhost:1234/";
  constructor(private proxy:HttpClient) 
  { 
      
  }
  public getAllEmployees():Observable<Employee[]>
  {
   return this.proxy.get<Employee[]>(this.url);
  } 
}


