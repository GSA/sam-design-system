import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SdsDialogModule } from '@gsa-sam/components';
import { DialogOfficial, OfficialComponent } from './dialog-official.component';

@NgModule({
  imports: [CommonModule, FormsModule, SdsDialogModule],
  exports: [DialogOfficial],
  bootstrap: [DialogOfficial],
  declarations: [DialogOfficial, OfficialComponent],
})
export class DialogOfficialModule {}
