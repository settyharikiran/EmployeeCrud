import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';
import { IEmployee } from '../../../Employee';
import { IDepartment } from '../../../Department';
import {RouterModule,Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  isValidFormSubmitted = false;
  Employee = new IEmployee();
  DepartmentList:IDepartment[];
  EmployeeList=Array<IEmployee>();
  Empid: number;

  constructor(private _router:Router) {
    this.DepartmentList= new Array<IDepartment>();
    this.EmployeeList= new Array<IEmployee>();

    this.DepartmentList=[
      {DeptId:1,DeptName:".Net"},
      {DeptId:2,DeptName:"Php"},
      {DeptId:3,DeptName:"Java"}
    ]
   }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    
    this.isValidFormSubmitted = false;
    if (form.invalid) {
       return;
    }

    this.isValidFormSubmitted = true;
    this.Employee = form.value;

    if(this.EmployeeList.length==0){
      this.Employee.EmpId=1;
      this.EmployeeList.push(this.Employee);
    }
    else{
      this.Empid= this.EmployeeList[this.EmployeeList.length-1].EmpId;
      this.Employee.EmpId=this.Empid+1;
      this.EmployeeList.push(this.Employee);
    }
    console.log(JSON.parse(localStorage.getItem("sss")))
    localStorage.setItem("sss",JSON.stringify(this.EmployeeList));
    this.Employee = new IEmployee();
    form.resetForm();
    this._router.navigate(['employee/List']);
 }
}
