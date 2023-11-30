import { Task } from './../../models/Task';
import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks!: Task[];

  constructor(
    public taskService: TaskService
  ){
  }

  ngOnInit(){
    this.tasks = this.taskService.getTask();
  }
}
