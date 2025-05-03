import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/buttons/button/button.component';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    InputAuthIdentifierComponent,
    InputPasswordComponent,
    ButtonComponent,
    LogoComponent,
    CardSkeletonComponent,
    AccordionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    SkeletonModule,
    AccordionModule,
  ],
  exports: [
    InputAuthIdentifierComponent,
    InputPasswordComponent,
    ButtonComponent,
    LogoComponent,
    CardSkeletonComponent,
    AccordionComponent,
  ],
})
export class SharedModule {}
