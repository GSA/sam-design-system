import { Component, Input, ContentChild, TemplateRef, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'sds-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SdsSearchResultListComponent implements AfterViewInit{

  buttonText = true;

  constructor(private router: Router) {}

  @Input() messageInfoData: any;

  /**
   * List of items
   */
  @Input() model: any[];

  /**
   * Show divider between results
   */
  @Input() divider = true;

  /**
   * Child Template to be used to display the data for each item in the list of items
   */
  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;


  onButtonClick(buttonText) {
    if(buttonText.text == 'Go Back') {
      buttonText.text = 'Start Over';
      this.router.navigate(['/goBack']);
    } else {
      buttonText.text = 'Go Back';
      this.router.navigate(['/clearAll']);
    }

  }

  ngAfterViewInit(){
    const iconObject = this.model[0];
    console.log(iconObject);
  }

}
