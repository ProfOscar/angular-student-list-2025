import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsList } from "./students-list/students-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title:string = 'Ese02 - StudentsList';
}
