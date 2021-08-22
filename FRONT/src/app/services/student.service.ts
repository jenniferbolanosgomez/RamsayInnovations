import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Students } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  myAppUrl = 'https://localhost:44311/';
  myApiUrl = 'api/Student/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })

  }

  constructor(private http: HttpClient) { }


  getListStudents(): Observable<Students[]> {

    return this.http.get<Students[]>(this.myAppUrl + this.myApiUrl);
  }


  deleteStudent(id: number): Observable<Students> {
    return this.http.delete<Students>(this.myAppUrl + this.myApiUrl + id);
  }

  saveStudent(student: Students): Observable<Students> {
    return this.http.post<Students>(this.myAppUrl + this.myApiUrl, student, this.httpOptions);

  }

  showStudent(id: number): Observable<Students> {
    return this.http.get<Students>(this.myAppUrl + this.myApiUrl + id, this.httpOptions);
  }


  updateStudent(id: number, student: Students): Observable<Students> {
    return this.http.put<Students>(this.myAppUrl + this.myApiUrl + id, student, this.httpOptions);

  }
}