import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
    selector: 'basic-rich-text',
    templateUrl: './basic-rich-text.component.html',
    styleUrls: [],
    standalone: false
})
export class BasicRichTextComponent implements OnInit {
  public data = '';
  fc: UntypedFormControl = new UntypedFormControl('<p>this is a test Machine</p>');

  ngOnInit() {
    console.log('ngOnInit')

    this.fc.registerOnChange(i => {
      console.log('Comp On change')
      console.log(
        i.value);
    })
  }
}
