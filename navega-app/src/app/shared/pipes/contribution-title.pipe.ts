import { Pipe, PipeTransform } from '@angular/core';
import { ContributionType } from '../models/api-mock.models';

@Pipe({
  name: 'contributionTitle',
})
export class ContributionTitlePipe implements PipeTransform {
  private readonly TITLE_MAP: Record<ContributionType, string> = {
    monthly: 'Contribuição mensal',
    volunteer: 'Contribuição voluntária',
  };
  transform(type: ContributionType): string {
    return this.TITLE_MAP[type] ?? 'Título desconhecido';
  }
}
