import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'basic-rich-text',
  templateUrl: './basic-rich-text.component.html',
  styleUrls: [],
})
export class BasicRichTextComponent implements OnInit {
  public data = '';
  fc: FormControl = new FormControl('<p>this is a test</p>');

  ngOnInit() {}
}
