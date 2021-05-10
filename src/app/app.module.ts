import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarkModeToggle } from './dark-mode-toggle/dark-mode-toggle.component';
import { TaskFilterPipe } from './task/task-filter.pipe';
import { TaskService } from './task/task.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFilterPipe,
    DarkModeToggle,
    TodoListComponent,
    NewTaskComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
