import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MonthlyContributionService } from 'src/app/core/services/dashboard/monthly-contribution.service';
import {
  InputNumberConfig,
  InputRadioCategorie,
} from 'src/app/shared/models/inputs.model';

@Component({
  selector: 'app-contribution-management-modal',
  templateUrl: './contribution-management-modal.component.html',
  styleUrls: ['./contribution-management-modal.component.less'],
})
export class ContributionManagementModalComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private contributionService: MonthlyContributionService
  ) {}

  modalForm!: FormGroup;
  inputsConfig: InputNumberConfig[] = [
    {
      symbol: 'R$',
      inputId: 'inputContribution',
      title: 'Valor da Contribuição',
      locale: 'en-US',
      minFractionDigits: 2,
    },
    {
      symbol: '%',
      inputId: 'inputSalary',
      title: 'Porcentagem do salário',
      locale: 'en-US',
      minFractionDigits: 2,
    },
  ];

  categories: InputRadioCategorie[] = [
    { label: 'Contribuição mensal', key: 'monthly' },
    { label: 'Contribuição voluntária', key: 'volunteer' },
  ];

  ngOnInit(): void {
    this.modalForm = this.formBuilder.group({
      type: ['monthly', Validators.compose([Validators.required])],
      value: [undefined, Validators.compose([Validators.required])],
      percent: [undefined, Validators.compose([])],
    });
  }

  displayModal: boolean = true;

  showModalDialog() {
    this.displayModal = true;
  }
  updateInputContribution(value: number) {
    alert('in contribution');
    this.modalForm.patchValue({ value: value });
    console.log(value);
  }
  updateInputPercent(value: number) {
    alert('in percent');
    this.modalForm.patchValue({ percent: value });
    console.log(value);
  }
  updateInputRadio(selected: InputRadioCategorie) {
    this.modalForm.patchValue({ type: selected.key });
    console.log(selected.key);
  }

  onSubmitError(): string {
    let errorMessage = '❌ Erro na validação:\n';
    if (this.modalForm.get('value')?.errors) {
      errorMessage += '• Valor de contribuição deve ser maior que R$ 0,00\n';
    }
    if (
      this.modalForm.get('type')?.value === 'monthly' &&
      this.modalForm.get('percent')?.errors
    ) {
      errorMessage +=
        '• Para contribuição mensal, percentual é obrigatório (0-100%)\n';
    }

    alert(errorMessage);
    return errorMessage;
  }

  onSubmit() {
    const { type, value, percent } = this.modalForm.value;

    if (this.modalForm.invalid) {
      const errorMessage = this.onSubmitError();
      alert(errorMessage);
      return;
    }
    this.contributionService.setNewContribution({ type, value, percent });
  }
}
