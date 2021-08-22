import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  listStudents: Students[];
  loading = false;
  constructor(private studentService: StudentService) {


  }
  ngOnInit(): void {
    this.showStudent();
  }

  showStudent() {
    this.loading = true;
    this.studentService.getListStudents().subscribe(data => {
      this.loading = false;
      this.listStudents = data;
    })
  }

  delete(id: number) {
    this.loading = true;
    this.studentService.deleteStudent(id).subscribe(data => {
      this.showStudent()
      this.loading = false;

    })

  }

}
