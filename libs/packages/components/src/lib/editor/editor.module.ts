import { NgModule } from '@angular/core';

import { SdsEditorComponent } from './editor.component';

import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, A11yModule, FormsModule],
    exports: [SdsEditorComponent],
    declarations: [SdsEditorComponent],
    providers: []
})
export class SdsEditorModule { }
