import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/shared/models/inputiradio.model';

@Component({
  selector: 'app-contribution-management-modal',
  templateUrl: './contribution-management-modal.component.html',
  styleUrls: ['./contribution-management-modal.component.less'],
})
export class ContributionManagementModalComponent implements OnInit {
  constructor() {}

  categories: Categorie[] = [
    { label: 'Contribuição mensal', key: 'monthly' },
    { label: 'Contribuição voluntária', key: 'volunteer' },
  ];

  ngOnInit(): void {}

  displayModal: boolean = true;

  showModalDialog() {
    this.displayModal = true;
  }
  updateInputRadio(selected: Categorie) {
    console.log(selected);
  }
}
