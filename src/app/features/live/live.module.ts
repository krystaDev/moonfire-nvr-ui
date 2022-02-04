import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveComponent } from './live.component';
import { LiveRoutingModule } from './live-routing.module';

@NgModule({
  declarations: [LiveComponent],
  imports: [CommonModule, LiveRoutingModule]
})
export class LiveModule {}
