import {Component, output, OutputEmitterRef, signal, WritableSignal} from '@angular/core';
import {FormsModule} from "@angular/forms";

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
  enteredTitle:WritableSignal<string> = signal('');
  enteredSummary:WritableSignal<string> = signal('');
  enteredDate:WritableSignal<string> = signal('');
  onCancel(): void {
    this.cancel.emit();
  }
}
