import { Component, Input } from '@angular/core';

@Component({
  selector: 'sds-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class SdsIconComponent {

  @Input() icon: string;
  @Input() rotate: number = 0;
  @Input() size: string = 'lg';
  /**
   * Classes to be applied to i-bs element
   */
  @Input()
  set classes(classesToApply: Array<string>){
    if(classesToApply){
      this.iconClasses = classesToApply.join(', ')
    }
  };


  iconClasses: string = '';
}
