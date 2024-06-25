import {Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';
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
  complete: OutputEmitterRef<string> = output<string>();


  onCompleteTask():void {
    this.complete.emit(this.tasksObj().id)
  }
}

