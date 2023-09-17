import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { delay } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  isLoaded = false;
  btnTitle = "Pokaz";
  students : Student[] = [];
  isDataSearching = false;
  isErrorOccured = false;

  constructor(private studentService : StudentService) {

  }

  search(){
    console.log("Button search clicked")
    this.isLoaded = !this.isLoaded;

    if (this.isLoaded) {
      
      this.isDataSearching = true;
      this.btnTitle = "Wyszukiwanie...";
      this.students = [];

      this.studentService.getStudents()
      .pipe(delay(2000))
      .subscribe({
        next: data => {
        console.log("inside subscribe");
        console.log(data);
        this.students = data;
        
        this.isDataSearching = false;
        this.btnTitle = "Ukryj";
      },
        error: ()=>{
          this.isDataSearching = false;
          this.isLoaded = false;
          this.btnTitle = "Pokaz";
          this.isErrorOccured = true;
        }      
      });
  
      console.log("outside subscribe");
    } else {
      this.btnTitle = "Pokaz";
    }

  }

  delete(id : number){
    //alert("Kliknięto przycisk usuń! Na studencie o id = " + id);

    this.studentService.deleteStudent(id)
      .subscribe(()=>{
        this.students = this.students.filter(x=>x.id != id);
      })
  }

}
