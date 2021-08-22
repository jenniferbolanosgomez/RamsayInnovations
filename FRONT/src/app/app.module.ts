import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditStudentComponent } from './components/add-edit-student/add-edit-student.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { SeeStudentsComponent } from './components/see-students/see-students.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditStudentComponent,
    NavbarComponent,
    ListStudentsComponent,
    SeeStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
