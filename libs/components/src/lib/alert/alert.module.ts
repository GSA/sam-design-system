import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamAlertComponent } from './alert.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ SamAlertComponent ],
    exports: [ SamAlertComponent ],
})
export class SamAlertModule { }

export{ SamAlertComponent } from './alert.component';
