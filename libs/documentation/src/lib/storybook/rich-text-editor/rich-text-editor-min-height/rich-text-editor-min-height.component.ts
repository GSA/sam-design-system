import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
	standalone: false,
  selector: 'sds-rich-text-editor-min-height',
  templateUrl: './rich-text-editor-min-height.component.html',
})
export class RichTextEditorMinHeightComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes')
    console.log(this.data);
  }
  public data = 'Min';
  //fc: UntypedFormControl = new UntypedFormControl('<p>this is a test PRogeess</p>');



  ngOnInit() {
    console.log('ngOnInit')
    console.log(this.data);
    //   this.fc.registerOnChange(i => {

    //  //t   this.fc.
    //     console.log('Comp On change')
    //     console.log(
    //       i.value);
    //   })

    //   this.fc.valueChanges.subscribe(i => {
    //     console.log('Subscribe change 4')
    //      console.log(this.fc.getRawValue());
    //     console.log(i);
    //   });
  }
}