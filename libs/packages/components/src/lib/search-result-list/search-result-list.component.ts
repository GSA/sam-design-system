import { Component, Input, ContentChild, TemplateRef, ViewChild, ElementRef, Renderer2, OnInit, OnChanges, AfterViewInit } from '@angular/core';
@Component({
  selector: 'sds-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SdsSearchResultListComponent implements OnInit, OnChanges, AfterViewInit{

constructor() {}
  /**
   * List of items
   */
  @Input() model: any;

  /**
   * Show divider between results
   */
  @Input() divider = true;

  /**
   * Child Template to be used to display the data for each item in the list of items
   */
  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;


  data = {
      title: '',
      message: ''
  }

  ngOnInit(): void {


    this.displayTemplate();



  }

  ngOnChanges(){

      this.displayTemplate()
  }

  ngAfterViewInit(){
    // this.displayTemplate();
  }

  displayTemplate(){
    console.log(this.model)
    if(this.model.error){
      this.data.title = this.model.error.title;
      this.data.message = this.model.error.description;
    } else if (this.model.emptySearch){
      this.data.title = this.model.emptySearch.title;
      this.data.message = this.model.emptySearch.description;
    } else {
      // this.data.title ='';
      // this.data.message ='';
      return;
    }
    return;
  }


}
