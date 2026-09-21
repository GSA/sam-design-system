import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

import { FormlyRichTextEditorComponent } from './formly-rich-text-editor.component';

describe('FormlyRichTextEditorComponent', () => {
  let component: FormlyRichTextEditorComponent;
  let fixture: ComponentFixture<FormlyRichTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormlyRichTextEditorComponent],
      // The component's template renders `<form [formGroup]>` and a
      // `<formly-form>` whose single field is of type `rich-text-editor`, so
      // the modules FormlyRichTextEditorModule imports are needed here too
      // (SdsFormlyModule registers the `rich-text-editor` Formly type, whose
      // wrapper uses an `@slideInOut` animation, hence NoopAnimationsModule).
      // Karma tolerated their absence — it logged NG0303/NG0304 to the
      // console but still reported the spec as passing; Vitest surfaces it as
      // a real failure.
      imports: [NoopAnimationsModule, ReactiveFormsModule, SdsFormlyModule, FormlyModule.forRoot()],
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
