import { Component } from '@angular/core';

@Component({
  selector: 'sam-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly displayThemeKey = 'displayTheme';
  public readonly sdsThemeString = 'sds';
  public readonly uswdsThemeString = 'uswds';
  currentDisplayed;
  styleSheetLink: Element;
  constructor(){
    this.styleSheetLink = document.querySelector(
      `link[href="sds.css"],[href="uswds.css"]`
    );
    this.currentDisplayed = localStorage.getItem(this.displayThemeKey);
    if(this.currentDisplayed === null){
      localStorage.setItem(this.displayThemeKey, this.sdsThemeString);
      this.currentDisplayed = this.sdsThemeString;
    };
    if(this.styleSheetLink.getAttribute('href') !== `${this.currentDisplayed}.css`){
      this.swapTheme(this.currentDisplayed)
    }

  }
  swapTheme(themeString){
    this.styleSheetLink.setAttribute('href', `${themeString}.css`);
    this.currentDisplayed = themeString;
    localStorage.setItem(this.displayThemeKey, themeString);
  }
}
