import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarbleComponent } from './marble/marble.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MarbleComponent
  ],
  declarations: [MarbleComponent]
})
export class CoreModule { }
