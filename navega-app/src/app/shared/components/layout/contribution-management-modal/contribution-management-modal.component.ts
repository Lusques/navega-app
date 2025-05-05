import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribution-management-modal',
  templateUrl: './contribution-management-modal.component.html',
  styleUrls: ['./contribution-management-modal.component.less'],
})
export class ContributionManagementModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayModal: boolean = true;

  showModalDialog() {
    this.displayModal = true;
  }
}
