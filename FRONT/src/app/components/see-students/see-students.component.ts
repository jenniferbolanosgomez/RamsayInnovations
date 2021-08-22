import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Students } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-see-students',
  templateUrl: './see-students.component.html',
  styleUrls: ['./see-students.component.css']
})
export class SeeStudentsComponent implements OnInit {
  loading = false;
  student: Students;
  idStudent: number;

  constructor(private studentServivce: StudentService, private route: ActivatedRoute) {
    this.idStudent = +this.route.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.showStudent();
  }

  showStudent() {
    this.loading = true;
    this.studentServivce.showStudent(this.idStudent).subscribe(data => {
      this.loading = false;
      this.student = data;



    })

  }

}
