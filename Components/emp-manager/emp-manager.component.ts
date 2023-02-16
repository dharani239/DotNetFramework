import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-emp-manager',
  templateUrl: './emp-manager.component.html',
  styleUrls: ['./emp-manager.component.css']
})
export class EmpManagerComponent implements OnInit{
  empList:Employee[]=[];
  constructor(private service:EmployeeService) {
   

  }
  ngOnInit(): void {
   let Observable=this.service.getAllEmployees();
   Observable.subscribe((data:Employee[])=>
   {
    this.empList=data;
   })
  }
}
