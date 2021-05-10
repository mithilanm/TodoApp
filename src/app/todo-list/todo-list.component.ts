import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../task/task.model';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  editTaskForm: FormGroup;
  textName: string;
  textIndex: number = -1;
  textChecked: boolean;
  shownTasks: Task[];
  editMode = false;
  @Input() filterReceived: any;
  faTrash = faTrash;
  faPen = faPen;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.shownTasks = this.taskService.getTask();
    this.taskService.taskChanged
      .subscribe(
        (tasks: Task[]) => {
          this.shownTasks = tasks;
        }
      )
    this.initForm();
  }


  onSubmit(){
    this.editTaskForm.value.checked = this.textChecked;
    this.taskService.updateTask(this.editTaskForm.value, this.textIndex);
    this.editMode = false;
    this.textIndex = -1;
  }

  onEdit(chosenTask: Task, chosenIndex: number){
    this.editMode = true;
    this.textName = chosenTask.task;
    this.textIndex = chosenIndex;
    this.textChecked = chosenTask.checked;
  }

  onDelete(){
    this.taskService.getTaskStatus(this.textIndex)?this.taskService.decNumOfCompleted():null;
    this.taskService.deleteTask(this.textIndex);
    this.taskService.decNumOfTasks();
    this.editMode = false;
    this.textIndex = -1;
  }

  checked(index: number){
    this.taskService.checkTask(index);
    this.taskService.getTaskStatus(index)?this.taskService.incNumOfCompleted():this.taskService.decNumOfCompleted();
  }


  private initForm(){
    let editTaskName = '';

    this.editTaskForm = new FormGroup({
      'task': new FormControl(editTaskName, Validators.required)
    })
  }
}
