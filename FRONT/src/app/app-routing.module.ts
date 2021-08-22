import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditStudentComponent } from './components/add-edit-student/add-edit-student.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { SeeStudentsComponent } from './components/see-students/see-students.component';

const routes: Routes = [
{path: 'add' , component: AddEditStudentComponent},
{path: 'edit/:id', component: AddEditStudentComponent},
{path: 'see/:id', component: SeeStudentsComponent },
{path: '', component: ListStudentsComponent, pathMatch:'full' },
{path: '**', redirectTo: '/'},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
