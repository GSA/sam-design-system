import { Component } from '@angular/core';

@Component({
  selector: 'sam-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  styleSheetLink: Element;
  constructor() {
    this.styleSheetLink = document.querySelector('link[id="selected-style"]');
  }
  swapTheme(e) {
    this.styleSheetLink.setAttribute('href', `${e.target.value}.css`);
  }
}
