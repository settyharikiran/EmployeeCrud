import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';
import { EmployeeModule } from './employee.module';

const routes: Routes = [
  {
    path:"List",
    component:ListComponent
  },
  {
    path:"Manage",
    component:ManageComponent
  },
  {
    path:"Edit/:name",
    component:ManageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
