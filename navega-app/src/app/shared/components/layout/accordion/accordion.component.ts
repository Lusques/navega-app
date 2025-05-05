import { Component, Input, OnInit } from '@angular/core';
import {
  ContributionsItem,
  MockApi,
} from 'src/app/shared/models/api-mock.models';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less'],
})
export class AccordionComponent implements OnInit {
  @Input() accordion!: ContributionsItem;
  constructor() {}

  ngOnInit(): void {}
}
