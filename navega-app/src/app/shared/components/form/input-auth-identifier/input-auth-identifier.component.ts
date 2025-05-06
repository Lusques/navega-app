import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-auth-identifier',
  templateUrl: './input-auth-identifier.component.html',
  styleUrls: ['./input-auth-identifier.component.less'],
})
export class InputAuthIdentifierComponent implements OnInit {
  @Input() label: string = '';
  @Input() value: string = '';
  @Output() valueChanged = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
