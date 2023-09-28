import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { delay } from 'rxjs';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  // 1) Napisać request typu GET do pobrania danych studenta o określonym id - StudentService - DONE!
  // 2) Upewnimy się, że te dane są w porządku - DONE!
  // 3) Zbudujemy draft formularza edycji
  // 4) Bootstrap -> ostylowania formularza
    student! : Student;
  
  isSuccessUpdate = false;
  isUptadeProcessing = false;

  constructor(private activatedRoute : ActivatedRoute, private studentService : StudentService){
    this.activatedRoute.params.subscribe(param=>{
      //alert('Przekazano parametr: ' + param["id"]);
      this.studentService.getStudentById(param["id"])
        .subscribe(data =>{
          this.student = data;
          console.log(this.student);
        })

    });
  }

save(){
  this.isUptadeProcessing = true;
  this.studentService.updateStudent(this.student)
    .pipe(delay(2000))
    .subscribe(data=>{
      //alert("Dokonano aktualizacji!")
      this.isSuccessUpdate = true;
      this.isUptadeProcessing = false;
    })
}

}