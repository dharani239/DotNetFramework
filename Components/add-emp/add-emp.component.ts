import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/Services/employee.service';


@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {
  imgUrl:string ="";
  empObj:Employee={} as Employee;
  
  
  constructor(private service:EmployeeService,private router:Router) {
    
    
  }
  onFileChange(event:any)
  {
    let reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(_ev)=>
    {
      this.imgUrl=reader.result as string;
      this.empObj.empPic=this.imgUrl;
    }
  }

  onAddEmployee()
  {
    this.service.postEmployee(this.empObj).subscribe((data:Employee)=>
    {
      this.empObj=data;
      alert("Employee is added successfully");
      this.router.navigate(['/']);
    })
  }
}
