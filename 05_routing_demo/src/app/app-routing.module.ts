import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/department-list', pathMatch: 'full'},
  {path: 'department-list', component: DepartmentListComponent},
  {path: 'department-list/:id', component: DepartmentComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: "**", component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeeListComponent, NotFoundPageComponent, DepartmentComponent];