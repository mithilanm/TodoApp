
import { EventEmitter } from "@angular/core";
import { Task } from "./task.model";

export class TaskService{
    taskChanged = new EventEmitter<Task[]>();
    private tasks: Task[] = [];
    numOfTasks = 0;
    numOfCompleted = 0;

    getTask(){
        return this.tasks.slice();
    }

    incNumOfTasks(){
        return this.numOfTasks++;
    }

    decNumOfTasks(){
        return this.numOfTasks--;
    }

    incNumOfCompleted(){
        return this.numOfCompleted++;
    }

    decNumOfCompleted(){
        return this.numOfCompleted--;
    }

    getTaskStatus(index: number){
        return this.tasks[index].checked;
    }

    addTask(task: Task){
        this.tasks.push(task);
        this.taskChanged.next(this.tasks.slice());
    }

    updateTask(task: Task, index: number){
        this.tasks[index] = task;
        this.taskChanged.next(this.tasks.slice());
    }

    deleteTask(index: number){
        this.tasks.splice(index, 1);
        this.taskChanged.next(this.tasks.slice());
    }

    checkTask(index: number){
        this.tasks[index].checked=!this.tasks[index].checked;
        this.taskChanged.next(this.tasks.slice());
    }
}