import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { MonthlyContributionComponent } from './pages/monthly-contribution/monthly-contribution.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'statement',
        pathMatch: 'full',
      },
      {
        path: 'statement',
        component: ComingSoonComponent,
      },
      {
        path: 'monthly-contribution',
        component: MonthlyContributionComponent,
      },
      {
        path: 'extra-contribution',
        component: ComingSoonComponent,
      },
      {
        path: 'documents',
        component: ComingSoonComponent,
      },
      {
        path: 'tax-regime',
        component: ComingSoonComponent,
      },
      {
        path: 'request-benefit',
        component: ComingSoonComponent,
      },
      {
        path: 'regressive-statement',
        component: ComingSoonComponent,
      },
      {
        path: 'information',
        component: ComingSoonComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
