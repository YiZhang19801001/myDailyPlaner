import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Task } from '../task-bar/task-bar.model';


@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent implements OnInit {
  @Input() taskDone:Task;
  @Output() taskUndo:EventEmitter<Task>;

  constructor() {
      this.taskUndo =new EventEmitter();
  }

  ngOnInit() {
  }

  public UndoTask(){
    
    this.taskUndo.emit(this.taskDone);
  }

}
