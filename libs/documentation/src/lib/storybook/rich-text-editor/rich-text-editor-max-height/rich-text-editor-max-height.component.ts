import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'sds-rich-text-editor-max-height',
  templateUrl: './rich-text-editor-max-height.component.html',
})
export class RichTextEditorMaxHeightComponent implements OnInit, OnChanges {
  public data = 'Max';
  //fc: UntypedFormControl = new UntypedFormControl('<p>this is a test PRogeess</p>');
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes')
    console.log(this.data);
  }


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
