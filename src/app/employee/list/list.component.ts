import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../../Employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  EmployeeList:Array<IEmployee>;

  constructor() {
    this.EmployeeList= new Array<IEmployee>();
   }

  ngOnInit() {
    this.EmployeeList = JSON.parse(localStorage.getItem("sss"))
  }

}
