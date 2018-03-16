import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Task } from './task-bar.model';


@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.css']
})
export class TaskBarComponent implements OnInit {
  @Input() task:Task;
  @Output() taskDone:EventEmitter<Task>;

  constructor() {
    this.taskDone=new EventEmitter();
  }

  public ChangeTaskStatus()
  {
    
    this.taskDone.emit(this.task);
  }

  ngOnInit() {
  }

}
