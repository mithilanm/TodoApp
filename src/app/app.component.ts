import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  textName: string;
  taskForm: FormGroup;
  shownTasks: Task[];

  constructor(private taskService: TaskService){}

  ngOnInit(): void{
    this.shownTasks = this.taskService.getTask();
    this.taskService.taskChanged
      .subscribe(
        (tasks: Task[]) => {
          this.shownTasks = tasks;
        }
      )
    this.initForm();
    //this.shownTasks = this.taskService.getTask();
  }

  onSubmit(){
    this.taskService.addTask(this.taskForm.value);
    this.taskForm.reset();
  }

  private initForm(){
    let taskName = '';

    this.taskForm = new FormGroup({
      'task': new FormControl(taskName, Validators.required)
    })
  }

}
