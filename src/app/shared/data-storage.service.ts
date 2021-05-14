import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { TaskService } from "../task/task.service";
import { Task } from "../task/task.model";

@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor(private http: HttpClient, private taskService: TaskService){}

    storeTasks() {
        const tasks = this.taskService.getTask();
        this.http.put('https://ng-todo-app-44dd7-default-rtdb.firebaseio.com/tasks.json', tasks).subscribe(response => {
            console.log(response);
        });
    }

    fetchTasks(){
        this.http.get<Task[]>('https://ng-todo-app-44dd7-default-rtdb.firebaseio.com/tasks.json').subscribe(tasks => {
            this.taskService.setTasks(tasks);
        });
    }
}
