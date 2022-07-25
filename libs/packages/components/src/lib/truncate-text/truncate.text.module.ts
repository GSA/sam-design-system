import { NgModule } from '@angular/core';

import { SdsTruncateTextByLineDirective } from './truncate-text.directive';
import { SdsTruncatedTextContainerComponent } from './truncate-text-container.component';

@NgModule({
  imports: [],
  exports: [SdsTruncateTextByLineDirective],
  declarations: [
    SdsTruncateTextByLineDirective,
    SdsTruncatedTextContainerComponent,
  ],
  providers: [],
  entryComponents: [SdsTruncatedTextContainerComponent],
})
export class SdsTruncateModule {}
