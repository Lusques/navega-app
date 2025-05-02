import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/dashboard-layout/components/header/header.component';

@NgModule({
  declarations: [LoginLayoutComponent, DashboardLayoutComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [RouterModule]
})
export class CoreModule {}
