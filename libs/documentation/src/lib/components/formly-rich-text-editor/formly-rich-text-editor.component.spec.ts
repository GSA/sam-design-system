import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyRichTextEditorComponent } from './formly-rich-text-editor.component';

describe('FormlyRichTextEditorComponent', () => {
  let component: FormlyRichTextEditorComponent;
  let fixture: ComponentFixture<FormlyRichTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormlyRichTextEditorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyRichTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
