import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
const PRIORITY_COLOR_HIGH = '#FF9966';
const PRIORITY_COLOR_MEDIUM = '#CCCCFF';
const PRIORITY_COLOR_LOW = '#D5FFD5';

@Directive({
  selector: '[appChangeBackColor]'
})
export class ChangeBackColorDirective {
  @Input('appChangeBackColor') priority = 'Средняя';
  cardClasses: string[] = [PRIORITY_COLOR_HIGH, PRIORITY_COLOR_MEDIUM, PRIORITY_COLOR_LOW];
  priorities: string[] = ['Высокая', 'Средняя', 'Низкая'];
  cardClass = '';

  constructor(private el: ElementRef, private render: Renderer2) {
    console.log(this.priority);
    this.cardClass = this.cardClasses.find((el, idx) => idx === this.priorities.indexOf(this.priority));
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', this.cardClass);
  }
  // @HostListener('change', ['$event']) onChange(event: Event) {
  //   this.cardClass = this.cardClasses.find((el, idx) => idx === this.priorities.indexOf(this.priority));
  //   console.log('Приоритет изменен на: ', this.priority, this.cardClass);
  //   this.render.setStyle(this.el.nativeElement, 'backgroundColor', this.cardClass);
  // }

   // onChange() {
  //   this.cardClass = this.cardClasses.find((el, idx) => idx === this.priorities.indexOf(this.toDoCard.priority));
  // }

}
