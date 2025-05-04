import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  authForm!: FormGroup;
  isIdentifierValid: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      identifier: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
  onSubmit() {
    if (this.authForm.invalid) return;

    const { identifier, password } = this.authForm.value;
    this.authService.login(identifier, password).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  updateIdentifier(value: string) {
    this.authForm.patchValue({ identifier: value });
  }
  updatePassword(value: string) {
    this.authForm.patchValue({ password: value });
  }
}
