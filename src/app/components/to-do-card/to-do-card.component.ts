import { Component, OnInit } from '@angular/core';

interface ICard {
  priority: string;
  cardClass: string;
}

@Component({
  selector: 'app-to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.css']
})
export class ToDoCardComponent implements OnInit {
  card: ICard = {
    priority: '',
    cardClass: 'antiquewhite',
  };
  priorities: string[] = ['Высокая', 'Средняя', 'Низкая'];
  cardClasses: string[] = ['#FF9966', '#CCCCFF', '#D5FFD5'];

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    console.log(this.card.priority);
    this.card.cardClass = this.cardClasses.find((el, idx) => idx === this.priorities.indexOf(this.card.priority));
    console.log(this.card.cardClass);
  }

}
