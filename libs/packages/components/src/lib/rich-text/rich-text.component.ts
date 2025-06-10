import { ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChangeEvent, CKEditorComponent, BlurEvent, FocusEvent } from '@ckeditor/ckeditor5-angular';
import { BlockQuote, Essentials, List, Bold, ClassicEditor, EditorConfig, Heading, Indent, IndentBlock, Italic, Link, Paragraph, TableToolbar, Table } from 'ckeditor5'

@Component({
  selector: 'sds-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrl: './rich-text.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SdsRichTextComponent),
      multi: true,
    },
  ],

})
export class SdsRichTextComponent implements ControlValueAccessor {
  @Input() minHeight: number;
  @Input() maxHeight: number;
  @ViewChild('editor') editorComponent: CKEditorComponent;
  @Input() placeholder: string = '';

  model: string;


  get minHeightClass(): string {
    return this.minHeight ? `min-height-${this.minHeight}` : '';
  }
  get maxHeightClass(): string {
    return this.maxHeight ? `max-height-${this.maxHeight}` : '';
  }

  _onChange = (_: any) => { };
  
  _onTouched = (_: any) => { };

  onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    this._onChange(data);
  }


  onTouched({ editor }: BlurEvent) {
    const data = editor.getData();
    this._onTouched(data);
  }

  writeValue(value: any): void {

    this.model = value;
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }



  constructor(private changeDetector: ChangeDetectorRef) { }

  public isLayoutReady = false;

  public Editor = ClassicEditor;



  public config: EditorConfig = {}; // CKEditor needs the DOM tree before calculating the configuration.
  public ngAfterViewInit(): void {


    this.config = {

      toolbar: {
        items: [
          'heading',
          '|',
          'bold', 'italic', 'link', 'bulletedList', 'numberedList',
          '|',
          'indent', 'outdent',
          '|',
          'blockQuote',
          'insertTable',
          '|',
          'undo',
          'redo'
        ],
        shouldNotGroupWhenFull: false
      },
      plugins: [Heading,
        Bold, Italic, Link, List,
        Indent, IndentBlock,
        BlockQuote, Essentials,
        Table,
        TableToolbar,
        Paragraph
      ],
      heading: {
        options: [
          {
            model: 'paragraph',
            title: 'Paragraph',
            class: 'ck-heading_paragraph'
          },
          {
            model: 'heading1',
            view: 'h1',
            title: 'Heading 1',
            class: 'ck-heading_heading1'
          },
          {
            model: 'heading2',
            view: 'h2',
            title: 'Heading 2',
            class: 'ck-heading_heading2'
          },
          {
            model: 'heading3',
            view: 'h3',
            title: 'Heading 3',
            class: 'ck-heading_heading3'
          },
          {
            model: 'heading4',
            view: 'h4',
            title: 'Heading 4',
            class: 'ck-heading_heading4'
          },
          {
            model: 'heading5',
            view: 'h5',
            title: 'Heading 5',
            class: 'ck-heading_heading5'
          },
          {
            model: 'heading6',
            view: 'h6',
            title: 'Heading 6',
            class: 'ck-heading_heading6'
          }
        ]
      },
      licenseKey: 'GPL',
      table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
      },
      link: {
        addTargetToExternalLinks: true,
        defaultProtocol: 'https://',
        decorators: {
          toggleDownloadable: {
            mode: 'manual',
            label: 'Downloadable',
            attributes: {
              download: 'file'
            }
          }
        }
      },
      placeholder: this.placeholder,


    };

    this.isLayoutReady = true;
    this.changeDetector.detectChanges();
  }



}
