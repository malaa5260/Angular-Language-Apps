import {Component, computed, signal, Signal} from '@angular/core';
import {HeaderComponent} from "../Components/header/header.component";
import {UserComponent} from "../Components/user/user.component";
import {NgForOf} from "@angular/common";
import {DUMMY_USERS} from "../Components/user/dummy-users";
import {TasksComponent} from "../Components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    NgForOf,
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  userList = DUMMY_USERS;
  selectedUserId = signal<string>('u1');

  get selectedUser() {
    return this.userList.find(item => item.id === this.selectedUserId());
  }

  // selectedUserName: Signal<string> = computed(() => {
  //   return this.userList.find(item => item.id === this.selectedUserId())?.name ?? '';
  // })

  userSelected(id: string): void {
    this.selectedUserId.set(id);
  }
}
