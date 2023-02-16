import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit{
  empId:string | null="";
  foundEmp:Employee={} as Employee; 
  
  constructor(private service:EmployeeService,private activatedRoute:ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>
    {
      this.empId=param.get("id")
    })
    if(this.empId!=null)
    {
        this.service.getEmployee(this.empId).subscribe((data:Employee)=>
        {
            this.foundEmp=data;
        })
    }
  }
}
