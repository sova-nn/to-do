import {Component, Input, OnInit, ContentChild, ElementRef} from '@angular/core';
import toDos from '../../../moc/moc';
import {IToDos} from '../../app.component';
import {VisibleService} from '../../servises/visible.service';

@Component({
  selector: 'app-card-field',
  templateUrl: './card-field.component.html',
  styleUrls: ['./card-field.component.css']
})
export class CardFieldComponent implements OnInit {
  @Input() onShow: boolean;
  toDos: IToDos[] = JSON.parse(JSON.stringify(toDos));

  constructor() { }

  ngOnInit(): void {}

  onRemove(id: number) {
    console.log('Id to remove', id);
    this.toDos = this.toDos.filter(p => p.id !== id);
  }

  onPop(card: IToDos): void {
    this.toDos = this.toDos.filter(p => p.id !== card.id);
    this.toDos.push(card);
  }

  updateToDos(card: IToDos): void {
    card.id = this.toDos.length;
    this.toDos.unshift(card);
    console.log('Пришло из хедера', this.onShow);
  }

}


