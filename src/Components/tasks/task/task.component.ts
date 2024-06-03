import {Component, input, InputSignal} from '@angular/core';
import {type Task} from '../task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasksObj: InputSignal<Task> = input.required<Task>();
}

