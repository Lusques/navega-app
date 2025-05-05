import { Component, Input, OnInit } from '@angular/core';
type variants = 'default' | 'ghost';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export class ButtonComponent implements OnInit {
  @Input() styleClass: string = '';
  @Input() label: string = 'label';
  @Input() type: string = 'button';
  @Input() variant: variants = 'default';

  constructor() {}

  ngOnInit(): void {}

  getVariant() {
    return this.variant == 'default'
      ? ' button__component--default'
      : ' button__component--ghost';
  }
}
