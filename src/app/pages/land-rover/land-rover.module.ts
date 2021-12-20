import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandRoverComponent } from './land-rover.component';
import { LandRoverRoutingModule } from './land-rover-routing.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  exports: [LandRoverComponent],
  declarations: [LandRoverComponent],
  imports: [
    CommonModule,
    LandRoverRoutingModule,
    NzGridModule,
    NzCardModule,
    NzSpinModule,
    NzButtonModule,
  ],
})
export class LandRoverModule {}
