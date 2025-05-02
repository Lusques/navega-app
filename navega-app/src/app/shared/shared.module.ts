import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAuthIdentifierComponent } from './components/form/input-auth-identifier/input-auth-identifier.component';
import { InputPasswordComponent } from './components/form/input-password/input-password.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [InputAuthIdentifierComponent, InputPasswordComponent],
  imports: [CommonModule, InputTextModule],
  exports: [InputAuthIdentifierComponent],
})
export class SharedModule {}
