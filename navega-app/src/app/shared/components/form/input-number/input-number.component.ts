import { Component, Input, OnInit } from '@angular/core';
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
    local: 'local',
    minFractionDigits: 2,
  };
  value6: number = 115744;
  constructor() {}

  ngOnInit(): void {}
}
