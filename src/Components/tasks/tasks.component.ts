import {Component, input, InputSignal} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {dummyTasks} from "./dummy-tasks";
import {NewTaskComponent} from "./new-task/new-task.component";
import type {NewTaskData} from "./task.model";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  name: InputSignal<string> = input.required<string>();
  userId: InputSignal<string> = input.required<string>();
  taskList = dummyTasks;
  isAddTask: boolean = false;

  constructor(private tasksService: TasksService) {
  }

  get selectedUserTask() {
    return this.tasksService.getUserTasks(this.userId());
  }


  onStartAddTask(): void {
    this.isAddTask = true;
  }

  onCloseAddTask(): void {
    this.isAddTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.taskList.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddTask = false;
  }
}
