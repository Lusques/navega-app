import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAuthIdentifierComponent } from './components/form/input-auth-identifier/input-auth-identifier.component';
import { InputPasswordComponent } from './components/form/input-password/input-password.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputAuthIdentifierComponent, InputPasswordComponent],
  imports: [CommonModule, FormsModule, InputTextModule, PasswordModule],
  exports: [InputAuthIdentifierComponent, InputPasswordComponent],
})
export class SharedModule {}
