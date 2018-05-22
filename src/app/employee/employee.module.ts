import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule
  ],
  declarations: [ListComponent, ManageComponent]
})
export class EmployeeModule { }
