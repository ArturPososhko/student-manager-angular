import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  constructor(private studentService : StudentService) {

  }

  save(name : string, email : string){
    this.studentService.addStudent({name, email} as Student)
    .subscribe(()=>{
      alert("Sukces!")
    })

    return false;
  }
}
