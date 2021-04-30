
import { EventEmitter } from "@angular/core";
import { Task } from "./task.model";

export class TaskService{
    taskChanged = new EventEmitter<Task[]>();
    private tasks: Task[] = [];

    getTask(){
        return this.tasks.slice();
    }

    addTask(task: Task){
        this.tasks.push(task);
        this.taskChanged.next(this.tasks.slice());
    }
}