import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less'],
})
export class LogoComponent implements OnInit {
  @Input() styleClass: string = '';
  @Input() style: string = '';
  constructor() {}

  ngOnInit(): void {}
}
