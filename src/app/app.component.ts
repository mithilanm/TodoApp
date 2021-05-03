import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from './task.model';
import { TaskService } from './task.service';
import { faCoffee, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  textName: string;
  textIndex: number;
  taskForm: FormGroup;
  shownTasks: Task[];
  editMode = false;
  numOfTasks = 0;
  numOfCompleted = 0;
  faTrash = faTrash;
  faPen = faPen;

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
    if(this.editMode){
      this.taskService.updateTask(this.taskForm.value, this.textIndex);
      this.editMode = false;
    } else {
      this.taskService.addTask(this.taskForm.value);
      this.numOfTasks++;
    }
    this.taskForm.reset();
  }

  onEdit(chosenTask: Task, chosenIndex: number){
    this.editMode = true;
    this.textName = chosenTask.task;
    this.textIndex = chosenIndex;
  }

  onDelete(){
    this.taskService.deleteTask(this.textIndex);
    this.numOfTasks--;
    this.editMode = false;
    this.taskForm.reset();
  }

  checked(index: number){
    this.taskService.checkTask(index);
    this.taskService.getTaskStatus(index)?this.numOfCompleted++:this.numOfCompleted--;
  }

  private initForm(){
    let taskName = '';

    this.taskForm = new FormGroup({
      'task': new FormControl(taskName, Validators.required)
    })
  }

}
