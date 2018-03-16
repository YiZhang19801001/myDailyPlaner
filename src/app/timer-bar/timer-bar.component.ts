import { ScheduleNote } from './timer-bar.model';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { TaskBarComponent } from '../task-bar/task-bar.component';


@Component({
  selector: 'app-timer-bar',
  templateUrl: './timer-bar.component.html',
  styleUrls: ['./timer-bar.component.css']
})
export class TimerBarComponent implements OnInit {
  @Input() scheduleNote:ScheduleNote;
  @Output() outputNote:EventEmitter<ScheduleNote>;

  
  
  constructor() {
    this.outputNote=new EventEmitter;
  }

  ngOnInit() {
  }

  public Modify(){
    this.outputNote.emit(this.scheduleNote);
  }
}
