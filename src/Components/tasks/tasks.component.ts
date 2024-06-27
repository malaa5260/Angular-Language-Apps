import {Component, input, InputSignal} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {dummyTasks} from "./dummy-tasks";
import {NewTaskComponent} from "./new-task/new-task.component";

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

  get selectedUserTask() {
    return this.taskList.filter((task) => task.userId === this.userId());
  }

  onCompleteTask(taskId: string): void {
    this.taskList = this.taskList.filter((task) => task.id !== taskId);
  }

  onStartAddTask(): void {
    this.isAddTask = true;
  }
  onCancelAddTask(): void {
    this.isAddTask = false;
  }
}
