import { InputRadioCategorie } from '../../../models/inputs.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.less'],
})
export class InputRadioComponent implements OnInit {
  @Input() name: string = 'a';
  @Input() categories: InputRadioCategorie[] = [
    { label: 'item A', key: 'A' },
    { label: 'item B', key: 'M' },
  ];
  @Output() selectedChanged = new EventEmitter();
  constructor() {}

  selectedCategory: any = null;

  ngOnInit() {
    this.selectedCategory = this.categories[0];
  }
}
