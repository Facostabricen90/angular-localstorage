import { TaskService } from './../../services/task.service';
import { Task } from './../../models/Task';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input()
  task!: Task;

  constructor(
    public taskService: TaskService
  ){}

  deleteTask(task: Task){
    if (confirm('Are you sure you want to delete it?')) {
      this.taskService.deleteTask(task);
    }
  }
}
