import { Component } from '@angular/core';
import {HeaderComponent} from "../Components/header/header.component";
import {UserComponent} from "../Components/user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
}
