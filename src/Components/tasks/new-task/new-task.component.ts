import {Component, inject, input, InputSignal, output, OutputEmitterRef, signal, WritableSignal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {type NewTaskData} from "../task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  close: OutputEmitterRef<void> = output<void>();
  // enteredTitle: WritableSignal<string> = signal('');
  // enteredSummary: WritableSignal<string> = signal('');
  // enteredDate: WritableSignal<string> = signal('');
  newTaskObj: NewTaskData = {} as NewTaskData;
  add: OutputEmitterRef<NewTaskData> = output<NewTaskData>();
  taskService = inject(TasksService);
  userId: InputSignal<string> = input.required<string>();

  onCancel(): void {
    this.close.emit();
  }

  onSubmit(): void {
    //this.add.emit(this.newTaskObj);
    this.taskService.addTask({
      title: this.newTaskObj.title,
      summary: this.newTaskObj.summary,
      date: this.newTaskObj.date,
    }, this.userId());
    this.close.emit();
  }
}
