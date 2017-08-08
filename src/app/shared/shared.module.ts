import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitSelectComponent } from './unit-select/unit-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    UnitSelectComponent
  ],
  declarations: [UnitSelectComponent]
})
export class SharedModule { }
