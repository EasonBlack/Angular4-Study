import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableComponent } from './ng-table.component';

@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TableComponent,
    FormsModule
  ]
})
export class DataTableModule { }