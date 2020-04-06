import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {IToDos} from '../../app.component';
import {VisibleService} from '../../servises/visible.service';

const PRIORITY_COLOR_HIGH = '#FF9966';
const PRIORITY_COLOR_MEDIUM = '#CCCCFF';
const PRIORITY_COLOR_LOW = '#D5FFD5';

@Component({
  selector: 'app-input-to-do-card',
  templateUrl: './input-to-do-card.component.html',
  styleUrls: ['./input-to-do-card.component.css']
})
export class InputToDoCardComponent implements OnInit {
  @Output() onAdd: EventEmitter<IToDos> = new EventEmitter<IToDos>();

  priority = '';
  priorities: string[] = ['Высокая', 'Средняя', 'Низкая'];
  cardClasses: string[] = [PRIORITY_COLOR_HIGH, PRIORITY_COLOR_MEDIUM, PRIORITY_COLOR_LOW];
  cardClass = 'antiquewhite';
  text = '';
  isVisible = false;

  constructor(private getInputVisible: VisibleService) {
  }

  ngOnInit(): void {
    this.getInputVisible.isVisibleStatus.subscribe((visible: boolean) => {
      this.isVisible = visible;
    });
  }

  onAddCard() {
    if (this.text.trim()) {
      const card: IToDos = {
        text: this.text,
        done: false,
        priority: this.priority ? this.priority : 'Низкая',
      };
      this.onAdd.emit(card);
      this.text = '';
      this.cardClass = 'antiquewhite';
      this.isVisible = false;
    }
  }

  onChange() {
    this.cardClass = this.cardClasses.find((el, idx) => idx === this.priorities.indexOf(this.priority));
  }

  onClick(e) {
    if (e.target.getAttribute('class') === 'input-card-field') {
      this.isVisible = false;
    }
    e.stopPropagation();
  }

}
