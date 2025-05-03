import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [ComingSoonComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
