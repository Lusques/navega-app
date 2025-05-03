import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.less'],
})
export class InputPasswordComponent implements OnInit {
  password: string = '';
  toggleMask: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
