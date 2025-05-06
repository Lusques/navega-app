import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/dashboard-layout/components/header/header.component';
import { NavigationComponent } from './layouts/dashboard-layout/components/navigation/navigation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginLayoutComponent,
    DashboardLayoutComponent,
    HeaderComponent,
    NavigationComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [RouterModule],
})
export class CoreModule {}
