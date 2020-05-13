import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[enter]'
})
export class ButtonEnterDirective {

  @Output('outputEnter') outputKeyDown = new EventEmitter();
  constructor() { }
  ngOnInit() {
    console.log('ss');
  }
  @HostListener('keydown.enter', ['$event'])
  onKeydown($event) {
    this.outputKeyDown.emit($event);
  }
}
