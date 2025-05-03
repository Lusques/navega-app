import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  identifier: string = '';
  password: string = '';
  constructor() {}

  ngOnInit(): void {}

  updateIdentifier(value: string) {
    this.identifier = value;
  }
  updatePassword(value: string) {
    this.password = value;
  }
}
