import { Component } from '@angular/core';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  faTasks = faTasks;
  filterReceived: string;

  constructor(private dataStorageService: DataStorageService){}

  ngOnInit(): void{
  }

  sendToList($event: any){this.filterReceived = $event; }

  onFetch(){
    this.dataStorageService.fetchTasks();
  }

  onSave(){
    this.dataStorageService.storeTasks();
  }
}
