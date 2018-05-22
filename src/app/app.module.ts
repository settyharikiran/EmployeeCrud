import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'employee',
    loadChildren: 'app/employee/employee.module#EmployeeModule'
  },
  {
    path: '',
    redirectTo:'/employee/Manage',
    pathMatch:"full"
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,
     )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
