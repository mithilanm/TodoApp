import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DataStorageService } from '../shared/data-storage.service';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  faPlus = faPlus;
  taskForm: FormGroup;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    this.taskService.addTask(this.taskForm.value);
    this.taskService.incNumOfTasks();
    this.taskForm.reset();
  }

  private initForm(){
    let taskName = '';
  
    this.taskForm = new FormGroup({
      'task': new FormControl(taskName, Validators.required)
    })

  }

}
