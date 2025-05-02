import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  @Output() headerClicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  notifyClick() {
    this.headerClicked.emit();
  }
}
