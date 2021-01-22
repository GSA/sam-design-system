import { Component } from '@angular/core';
import {allIcons} from 'ngx-bootstrap-icons'
import { kebabCase } from 'lodash-es';

@Component({
  templateUrl: './icons-bootstrap.component.html',
  styleUrls: ['./icons-bootstrap.component.scss'],
  selector: `sds-icons-bootstrap-demo`,
})
export class IconsBootstrap {
  bootstrapIcons = Object.keys(allIcons)
    .map(iconName => kebabCase(iconName))
    .map(this.xByXCorrection)
    .map(this.degCorrection)
    .map(this.xKCorrection);

  xByXCorrection(possibleXByXString: string){
    return possibleXByXString.replace(/(\d)-x-(\d)/, '$1x$2')
  }

  degCorrection(possibleDegString: string){
    return possibleDegString.replace(/(\d+)-deg/, '$1deg');
  }

  xKCorrection(possibleXKString: string){
    return possibleXKString.replace(/(\d)-k(-?)/, '$1k$2')
  }

}
