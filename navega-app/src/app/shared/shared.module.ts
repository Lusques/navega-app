import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/buttons/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputAuthIdentifierComponent } from './components/form/input-auth-identifier/input-auth-identifier.component';
import { InputPasswordComponent } from './components/form/input-password/input-password.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { LogoComponent } from './components/icons/logo/logo.component';
import { CardSkeletonComponent } from './components/loaders/card-skeleton/card-skeleton.component';
import { SkeletonModule } from 'primeng/skeleton';
import { AccordionComponent } from './components/layout/accordion/accordion.component';
import { AccordionModule } from 'primeng/accordion';
import { ChartDoughnutComponent } from './components/layout/chart-doughnut/chart-doughnut.component';
import { ChartModule } from 'primeng/chart';
import { ChartBadgeComponent } from './components/layout/chart-badge/chart-badge.component';
import { ContributionTitlePipe } from './pipes/contribution-title.pipe';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { ValueMaskDirective } from './directives/value-mask.directive';
import { ContributionManagementModalComponent } from './components/layout/contribution-management-modal/contribution-management-modal.component';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputRadioComponent } from './components/form/input-radio/input-radio.component';
import { InputNumberComponent } from './components/form/input-number/input-number.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { MenuComponent } from './components/layout/menu/menu.component';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    InputAuthIdentifierComponent,
    InputPasswordComponent,
    ButtonComponent,
    LogoComponent,
    CardSkeletonComponent,
    AccordionComponent,
    ChartDoughnutComponent,
    ChartBadgeComponent,
    ContributionTitlePipe,
    CurrencyFormatPipe,
    ValueMaskDirective,
    ContributionManagementModalComponent,
    InputRadioComponent,
    InputNumberComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    SkeletonModule,
    AccordionModule,
    ChartModule,
    DialogModule,
    RadioButtonModule,
    InputNumberModule,
    ReactiveFormsModule,
    MenuModule,
  ],
  exports: [
    InputAuthIdentifierComponent,
    InputPasswordComponent,
    ButtonComponent,
    LogoComponent,
    CardSkeletonComponent,
    AccordionComponent,
    ChartDoughnutComponent,
    ChartBadgeComponent,
    ContributionTitlePipe,
    CurrencyFormatPipe,
    ValueMaskDirective,
    ContributionManagementModalComponent,
    MenuComponent,
  ],
})
export class SharedModule {}
