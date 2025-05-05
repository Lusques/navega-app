import { Component, Input, OnInit } from '@angular/core';

interface RadioData {
  name: string;
  value: string;
  key: string;
  label: string;
}

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.less'],
})
export class InputRadioComponent implements OnInit {
  @Input() radioData!: RadioData;
  constructor() {}

  city!: string;
  city1!: string;

  selectedCategory: any = null;

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ];

  ngOnInit() {
    this.selectedCategory = this.categories[1];
  }
}
