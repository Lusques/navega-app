import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  authForm!: FormGroup;
  isIdentifierValid: boolean = true;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      identifier: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
  updateIdentifier(value: string) {
    this.authForm.patchValue({ identifier: value });
  }
  updatePassword(value: string) {
    this.authForm.patchValue({ password: value });
  }
}
