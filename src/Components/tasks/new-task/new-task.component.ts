import {Component, output, OutputEmitterRef, signal, WritableSignal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {type NewTaskData} from "../task.model";

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
  cancel: OutputEmitterRef<void> = output<void>();
  // enteredTitle: WritableSignal<string> = signal('');
  // enteredSummary: WritableSignal<string> = signal('');
  // enteredDate: WritableSignal<string> = signal('');
  newTaskObj: NewTaskData = {} as NewTaskData;
  add: OutputEmitterRef<NewTaskData> = output<NewTaskData>();

  onCancel(): void {
    this.cancel.emit();
  }

  onSubmit(): void {
    this.add.emit(this.newTaskObj);
  }
}
