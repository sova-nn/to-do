import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IToDos} from '../../app.component';

const PRIORITY_COLOR_HIGH = '#FF9966';
const PRIORITY_COLOR_MEDIUM = '#CCCCFF';
const PRIORITY_COLOR_LOW = '#D5FFD5';

@Component({
  selector: 'app-to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.css']
})
export class ToDoCardComponent implements OnInit {
  @Input() toDoCard: IToDos;
  @Output() onPale: EventEmitter<IToDos> = new EventEmitter<IToDos>();

  priorities: string[] = ['Высокая', 'Средняя', 'Низкая'];
  cardClasses: string[] = [PRIORITY_COLOR_HIGH, PRIORITY_COLOR_MEDIUM, PRIORITY_COLOR_LOW];
  cardClass = 'antiquewhite';
  constructor() {}

  ngOnInit(): void {
    this.cardClass = this.cardClasses.find((el, idx) => idx === this.priorities.indexOf(this.toDoCard.priority));
  }

  onChange() {
    this.cardClass = this.cardClasses.find((el, idx) => idx === this.priorities.indexOf(this.toDoCard.priority));
  }

  onPaleCard() {
    this.toDoCard.done = true;
    this.onPale.emit(this.toDoCard);
  }

}
