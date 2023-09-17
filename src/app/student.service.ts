import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient : HttpClient) { }

  getStudents() {
    return this.httpClient.get<Student[]>(this.url);
  }

  deleteStudent(studentId : number) {
    let studentUrl = this.url + "/" + studentId;
    return this.httpClient.delete<Student>(studentUrl);
  }

  addStudent(student : Student) {
    return this.httpClient.post<Student>(this.url, student);
  }
}
