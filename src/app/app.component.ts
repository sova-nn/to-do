import { Component } from '@angular/core';

export interface IToDos {
  id?: number;
  text: string;
  done: boolean;
  priority: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
