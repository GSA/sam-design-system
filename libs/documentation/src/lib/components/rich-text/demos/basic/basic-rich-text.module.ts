import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicRichTextComponent } from './basic-rich-text.component';
import { SdsRichTextModule } from 'libs/packages/components/src/lib/public-api';

@NgModule({
  declarations: [BasicRichTextComponent],
  imports: [
    CommonModule,
    SdsRichTextModule
  ],
  exports: [BasicRichTextComponent],
  bootstrap: [BasicRichTextComponent]
})
export class BasicRichTextModule {}
