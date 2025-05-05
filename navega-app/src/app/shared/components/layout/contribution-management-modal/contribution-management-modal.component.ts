import { Component, OnInit } from '@angular/core';
import { InputRadioCategorie } from 'src/app/shared/models/inputs.model';

@Component({
  selector: 'app-contribution-management-modal',
  templateUrl: './contribution-management-modal.component.html',
  styleUrls: ['./contribution-management-modal.component.less'],
})
export class ContributionManagementModalComponent implements OnInit {
  constructor() {}

  categories: InputRadioCategorie[] = [
    { label: 'Contribuição mensal', key: 'monthly' },
    { label: 'Contribuição voluntária', key: 'volunteer' },
  ];

  ngOnInit(): void {}

  displayModal: boolean = true;

  showModalDialog() {
    this.displayModal = true;
  }
  updateInputRadio(selected: InputRadioCategorie) {
    console.log(selected);
  }
}
