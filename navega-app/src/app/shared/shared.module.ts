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

@NgModule({
  declarations: [
    InputAuthIdentifierComponent,
    InputPasswordComponent,
    ButtonComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  exports: [
    InputAuthIdentifierComponent,
    InputPasswordComponent,
    ButtonComponent,
    LogoComponent,
  ],
})
export class SharedModule {}
