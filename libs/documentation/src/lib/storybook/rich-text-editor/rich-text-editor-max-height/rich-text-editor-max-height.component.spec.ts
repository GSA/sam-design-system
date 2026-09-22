import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SdsRichTextComponent, SdsRichTextModule } from '@gsa-sam/components';

import { RichTextEditorMaxHeightComponent } from './rich-text-editor-max-height.component';

describe('RichTextEditorMaxHeightComponent', () => {
  let component: RichTextEditorMaxHeightComponent;
  let fixture: ComponentFixture<RichTextEditorMaxHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RichTextEditorMaxHeightComponent],
      imports: [FormsModule, ReactiveFormsModule, SdsRichTextModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RichTextEditorMaxHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind maxHeight to 6 and not bind minHeight', () => {
    const richTextDebugEl = fixture.debugElement.query(By.directive(SdsRichTextComponent));
    expect(richTextDebugEl).toBeTruthy();
    const richTextInstance = richTextDebugEl.componentInstance as SdsRichTextComponent;
    expect(richTextInstance.maxHeight).toBe(6);
    expect(richTextInstance.minHeight).toBeUndefined();
  });
});
