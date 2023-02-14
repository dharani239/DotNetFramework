import { Component } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';
import { PlaceService } from 'src/app/Services/place.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees:Employee[]=[];
  constructor(private service:EmployeeService)
  {

  }
  ngOnInit(): void {
        this.service.getAllEmployees().subscribe((data:Employee[])=>
        {
          this.employees=data;
        })
  }
}
