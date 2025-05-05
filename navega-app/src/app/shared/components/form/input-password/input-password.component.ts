import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.less'],
})
export class InputPasswordComponent implements OnInit {
  @Input() label: string = '';
  @Output() passwordChanged = new EventEmitter();
  password: string = '';
  toggleMask: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
