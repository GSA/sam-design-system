import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'basic-rich-text',
  templateUrl: './basic-rich-text.component.html',
  styleUrls: [],
})
export class BasicRichTextComponent implements OnInit {
  public data = '';
  fc: UntypedFormControl = new UntypedFormControl('<p>this is a test</p>');

  ngOnInit() {}
}
