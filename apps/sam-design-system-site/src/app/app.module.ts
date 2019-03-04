import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { SamAlertModule } from '@sam-design-system/components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), SamAlertModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
