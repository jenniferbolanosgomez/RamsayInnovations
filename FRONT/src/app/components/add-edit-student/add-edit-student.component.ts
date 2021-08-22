import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Students } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {
  students: FormGroup;
  idStudent = 0;
  accion = 'Add';
  loading = false;
  student: Students;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private studentService: StudentService, private router: Router) {
    this.students = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      career: ['', Validators.required],
    });
    if (+this.route.snapshot.paramMap.get('id') > 0) {
      this.idStudent = +this.route.snapshot.paramMap.get('id');
    }


  }
  ngOnInit(): void {
    this.esEdit();

  }

  saveStudent() {
    if (this.accion === 'Add') {
      const student: Students = {
        username: this.students.get('username').value,
        firstname: this.students.get('firstname').value,
        lastname: this.students.get('lastname').value,
        age: this.students.get('age').value,
        career: this.students.get('career').value,
      };
      this.studentService.saveStudent(student).subscribe(data => {
        this.router.navigate(['/']);
      });
    } else {
      const student: Students = {
        id: this.student.id,
        username: this.students.get('username').value,
        firstname: this.students.get('firstname').value,
        lastname: this.students.get('lastname').value,
        age: this.students.get('age').value,
        career: this.students.get('career').value,
      };
      this.studentService.updateStudent(this.idStudent, student).subscribe(data => {
        this.router.navigate(['/']);

      });

    }
    console.log(this.student);
  }

  esEdit() {
    if (this.idStudent > 0)
      this.accion = 'Edit';
    this.studentService.showStudent(this.idStudent).subscribe(data => {
      this.student = data;
      this.students.patchValue({
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        age: data.age,
        career: data.career
      });
    });

  }

}
