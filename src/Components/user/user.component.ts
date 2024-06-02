import {Component, computed, EventEmitter, input, Input, InputSignal, Output, Signal } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  //@Input({required:true }) avatar: string='';
  //@Input({required: true}) name: string = '';
  @Output() userSelected: EventEmitter<string> = new EventEmitter();
  avatar: InputSignal<string> = input.required<string>();
  name: InputSignal<string> = input.required<string>();
  id: InputSignal<string> = input.required<string>();
  imagePath: Signal<string> = computed(() => {
    return 'assets/users/' + this.avatar();
  })
  // get imagePath(): string {
  //   return 'assets/users/' + this.avatar();
  // }

  onSelectedUser(): void {
    this.userSelected.emit(this.id());
  }
}
