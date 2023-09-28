import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-detail-student-action-button',
  templateUrl: './detail-student-action-button.component.html',
  styleUrls: ['./detail-student-action-button.component.css']
})
export class DetailStudentActionButtonComponent {
  @Output()
  onClickEventEmmiter = new EventEmitter();

  emitEvent(){
    this.onClickEventEmmiter.emit();
  }
}
