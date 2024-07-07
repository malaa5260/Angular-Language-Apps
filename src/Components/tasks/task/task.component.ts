import {Component, inject, input, InputSignal, output, OutputEmitterRef} from '@angular/core';
import {type Task} from '../task.model';
import {CardComponent} from "../../shared/card/card.component";
import {DatePipe} from "@angular/common";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasksObj: InputSignal<Task> = input.required<Task>();
  private taskService = inject(TasksService);

  onCompleteTask(): void {
    this.taskService.removeTask(this.tasksObj().id);
  }
}

