import { Component } from '@angular/core';
import {HeaderComponent} from "../Components/header/header.component";
import {UserComponent} from "../Components/user/user.component";
import {NgForOf} from "@angular/common";
import {DUMMY_USERS} from "../Components/user/dummy-users";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    NgForOf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  userList=DUMMY_USERS;
  userSelected(id:string):void{
    console.log(id,"id is");
  }
}
