import { ChangeDetectorRef } from '@angular/core';
import { SdsRichTextComponent } from './rich-text.component';

describe('SdsRichTextComponent CKEditor configuration', () => {
  it('creates a real editor with the configured plugins and GPL license', async () => {
    const component = new SdsRichTextComponent({ detectChanges: () => {} } as ChangeDetectorRef);
    component.placeholder = 'Enter formatted text';
    component.ngAfterViewInit();

    const element = document.createElement('div');
    document.body.appendChild(element);
    try {
      const editor = await component.Editor.create(element, component.config);
      try {
        expect(editor.state).toBe('ready');
        expect(editor.config.get('licenseKey')).toBe('GPL');
        expect(editor.config.get('placeholder')).toBe('Enter formatted text');
        for (const plugin of ['Heading', 'Bold', 'Italic', 'Link', 'List', 'Table', 'MediaEmbed']) {
          expect(editor.plugins.has(plugin)).toBe(true);
        }
        editor.setData('<p><strong>Formatted content</strong></p>');
        expect(editor.getData()).toBe('<p><strong>Formatted content</strong></p>');
      } finally {
        await editor.destroy();
      }
    } finally {
      element.remove();
    }
  });
});
