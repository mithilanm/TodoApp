import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarkModeToggle } from './dark-mode-toggle.component';
import { TaskFilterPipe } from './task-filter.pipe';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskFilterPipe,
    DarkModeToggle
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
