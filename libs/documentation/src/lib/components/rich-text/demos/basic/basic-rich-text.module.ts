import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicRichTextComponent } from './basic-rich-text.component';
import { SdsRichTextModule } from 'libs/packages/components/src/lib/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasicRichTextComponent],
  imports: [
    CommonModule,
    SdsRichTextModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [BasicRichTextComponent],
  bootstrap: [BasicRichTextComponent]
})
export class BasicRichTextModule {}
