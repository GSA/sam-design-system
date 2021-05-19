import { Component } from '@angular/core';

@Component({
  selector: 'sam-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  styleSheetLink: Element;
  constructor(){
    this.styleSheetLink = document.querySelector(
      `link[href^="sds"][href$="css"],[href^="uswds"][href$="css"]`
    );

  }
  swapTheme(e){
    this.styleSheetLink.setAttribute('href', `${e.target.value}.css`);
  }
}
