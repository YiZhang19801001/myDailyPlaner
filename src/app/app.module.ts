import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { TimerBarComponent } from './timer-bar/timer-bar.component';
import { TaskBarComponent } from './task-bar/task-bar.component';
import { TaskDoneComponent } from './task-done/task-done.component';



@NgModule({
  declarations: [
    AppComponent,
    TimerBarComponent,
    TaskBarComponent,
    TaskDoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
