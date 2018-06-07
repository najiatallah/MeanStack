import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatchHeightModule } from '../shared/directives/match-height.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    MatchHeightModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { 
 
}
