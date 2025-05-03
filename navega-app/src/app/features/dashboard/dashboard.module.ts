import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MonthlyContributionComponent } from './pages/monthly-contribution/monthly-contribution.component';
import { AccordionComponent } from 'src/app/shared/components/layout/accordion/accordion.component';

@NgModule({
  declarations: [ComingSoonComponent, MonthlyContributionComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
