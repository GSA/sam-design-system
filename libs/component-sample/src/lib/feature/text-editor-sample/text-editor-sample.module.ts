import { NgModule } from '@angular/core';
import { TextEditorSampleComponent} from "./text-editor-sample.component";
import { SdsTextEditorModule } from '../../../../../packages/components/src/lib/text-editor/text-editor.module';




@NgModule({
  imports: [SdsTextEditorModule],
  exports: [],
  declarations: [TextEditorSampleComponent]
})
export class TextEditorSampleModule {

}