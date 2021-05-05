import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from './task.model';
import { TaskService } from './task.service';
import { faFilter, faPen, faPlus, faTasks, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  textName: string;
  textIndex: number = -1;
  textChecked: boolean;
  taskForm: FormGroup;
  editTaskForm: FormGroup;
  shownTasks: Task[];
  editMode = false;
  numOfTasks = 0;
  numOfCompleted = 0;
  filter: string = 'all';


  faTrash = faTrash;
  faPen = faPen;
  faPlus = faPlus;
  faTasks = faTasks;
  faFilter = faFilter;

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
      this.editTaskForm.value.checked = this.textChecked;
      this.taskService.updateTask(this.editTaskForm.value, this.textIndex);
      this.editMode = false;
      this.textIndex = -1;
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
    this.textChecked = chosenTask.checked;
  }

  onDelete(){
    this.taskService.getTaskStatus(this.textIndex)?this.numOfCompleted--:null;
    this.taskService.deleteTask(this.textIndex);
    this.numOfTasks--;
    this.editMode = false;
    this.textIndex = -1;
    this.taskForm.reset();
  }

  checked(index: number){
    this.taskService.checkTask(index);
    this.taskService.getTaskStatus(index)?this.numOfCompleted++:this.numOfCompleted--;
  }

  private initForm(){
    let taskName = '';
    let editTaskName = '';

    this.taskForm = new FormGroup({
      'task': new FormControl(taskName, Validators.required)
    })

    this.editTaskForm = new FormGroup({
      'task': new FormControl(editTaskName, Validators.required)
    })
  }

}
