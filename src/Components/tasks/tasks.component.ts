import {Component, input, InputSignal} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {dummyTasks} from "./dummy-tasks";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  name: InputSignal<string> = input.required<string>();
  userId: InputSignal<string> = input.required<string>();
  taskList = dummyTasks;
  get selectedUserTask(){
    return this.taskList.filter((task) => task.userId === this.userId());
  }
}
