import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[sdsPopup]'
})
export class PopupDirective {
  @Input('sdsPopup')type ;
  @Input('direction') direction;
  @Input('content') content;
@HostListener('mouseover') onMouseOver(){
  
  console.log('here',this.type, this.direction)
  console.log('cont', this.content)
}
  constructor() { }

 
}
