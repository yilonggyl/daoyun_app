import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CopyrightComponent} from './copyright/copyright.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CopyrightComponent],
  exports: [CopyrightComponent]
})
export class CzbModule { }
