import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandRoverComponent } from './land-rover.component';

const routes: Routes = [{ path: '', component: LandRoverComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandRoverRoutingModule {}
