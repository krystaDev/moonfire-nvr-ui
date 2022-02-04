import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsComponent } from './records.component';
import { RecordsRoutingModule } from './records-routing.module';

@NgModule({
  declarations: [RecordsComponent],
  imports: [CommonModule, RecordsRoutingModule]
})
export class RecordsModule {}
