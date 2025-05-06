import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputNumberConfig } from 'src/app/shared/models/inputs.model';
@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.less'],
})
export class InputNumberComponent implements OnInit {
  @Input() inputConfig: InputNumberConfig = {
    symbol: 'symbol',
    inputId: 'inputId',
    title: 'title',
    locale: 'local',
    minFractionDigits: 2,
  };
  @Output() inputChanged = new EventEmitter();
  inputValue: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
