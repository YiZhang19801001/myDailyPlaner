import { Time } from '@angular/common';

import { ScheduleNote } from './timer-bar/timer-bar.model';
import { TaskBarComponent } from './task-bar/task-bar.component';
import { Component } from '@angular/core';
import { Task } from './task-bar/task-bar.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  frameWidth:number;
  frameHeight:number;
  timeText:number[];

  newTask:string;
  taskList:Array<Task>;

  scheduleList:Array<ScheduleNote>;

  listTaskDone:Array<Task>;

  start:string;
  end:string;

  note:string;
  color:string;

  //provide some sample data
  constructor() {
    this.timeText=[8,9,10,11,12,13,14,15,16,17]

    this.taskList = [
      new Task("Task 1"),
      new Task("Task 2")
    ];

    this.scheduleList=[
      new ScheduleNote('08:00','08:30','Morning Exercise','gold'),
      new ScheduleNote('16:30','17:00',' Transport','black')
    ];

   

    this.listTaskDone=[
      new Task("Task 3"),
      new Task("Task 4")
    ];
  }

  //add new task
  public Add():void{
    this.taskList.push(new Task(this.newTask));
    this.newTask="";
  }

  //add new schedule
  public AddNote(
    inputColor:HTMLInputElement
  ):void{
    this.color=inputColor.value;
    this.scheduleList.push(new ScheduleNote(this.start,this.end,this.note,this.color));
  }

  //task done
  public TaskComplete(taskDone:Task){
    this.listTaskDone.push(taskDone);
    let targetTask:Task;
    for (let index = 0; index < this.taskList.length; index++) {
      if(taskDone.taskId== this.taskList[index].taskId)
      {
        this.taskList.splice(index,1);
      } 
    }
  }

  //task undo
  public TaskUndo(UndoTask:Task)
  {
    this.taskList.push(UndoTask);
    let targetTask:Task;
    for (let index = 0; index < this.listTaskDone.length; index++) {
      if(UndoTask.taskId == this.listTaskDone[index].taskId){
        this.listTaskDone.splice(index,1);
      }
      
    } 
      
    
  }

  public ModifySchedule(outputNote:ScheduleNote)
  {
    this.start=outputNote.start;
    this.end=outputNote.end;
    this.note=outputNote.note;
    for (let index = 0; index < this.scheduleList.length; index++) {
     if(outputNote.id == this.scheduleList[index].id)
     {
       this.scheduleList.splice(index,1);
     } 
      
    }
  }
}
