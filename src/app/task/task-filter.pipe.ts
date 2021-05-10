import { Pipe, PipeTransform } from "@angular/core";
import { Task } from "./task.model";

@Pipe({
    name: 'taskFilter',
    //pure: false
})
export class TaskFilterPipe implements PipeTransform{
    transform(task: Task[], filter: string): Task[]{
        if(!task || !filter || filter=='all'){
            return task;
        }
        else if(filter=='completed'){
            return task.filter(task =>
                task.checked);
        }
        else if(filter=='pending'){
            return task.filter(task =>
                !task.checked);
        }
       /*  return task.filter(task => 
            task.task.toLowerCase().indexOf(filter.toLowerCase())!== -1); */
        else{
            return task.filter(task =>
                !task.checked && task.checked);
        }
    }
}