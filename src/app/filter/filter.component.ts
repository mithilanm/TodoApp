import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  faFilter = faFilter;
  filter: string = 'all';
  @Output() filterChanged = new EventEmitter<string>(); 
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  getTasks(){
    return this.taskService.numOfTasks;
  }

  getCompleted(){
    return this.taskService.numOfCompleted;
  }

  filterChange(filter: string){
    this.filter = filter;
    this.filterChanged.emit(this.filter);
  }
}
