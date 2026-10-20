import { Component, Input } from '@angular/core';
import { SDS_MENU_HEADER } from './menu-header.token';

@Component({
  selector: 'sds-menu-header',
  templateUrl: 'menu-header.component.html',
  standalone: false,
  providers: [{ provide: SDS_MENU_HEADER, useValue: true }],
})
export class SdsMenuHeaderComponent {
  @Input() hideClose = false;
}
