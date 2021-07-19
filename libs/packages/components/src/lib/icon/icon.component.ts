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
  /**
   * Array of up to two numbers to indicate the degree value to skew icon. The first element determines the horizontal skewing. The second element determines the vertical skewing. The second element is optional. if it is not provided, 0 will be used.
   */
  @Input()
  set skew(value: Array<number>){
    this.skewX = value[0];
    this.skewY = value[1] ? value[1] : 0;
  }

  get skewClass():string{
    if(this.skewX || this.skewY){
      return `skew-${this.skewX}-${this.skewY}`;
    }
    return '';
  }

  skewX: number;
  skewY: number;
  iconClasses: string = '';
}
