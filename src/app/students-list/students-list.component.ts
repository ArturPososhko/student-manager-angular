import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  isLoaded = false;
  btnTitle = "Pokaz";
  students : Student[] = [];

  constructor(private studentService : StudentService) {

  }

  search(){
    console.log("Button search clicked")
    this.isLoaded = !this.isLoaded;

    if (this.isLoaded) {
      this.btnTitle = "Ukryj";
      this.studentService.getStudents().subscribe(data => {
        console.log("inside subscribe");
        console.log(data);
        this.students = data;
      })
  
      console.log("outside subscribe");
    } else {
      this.btnTitle = "Pokaz";
    }

  }

}
