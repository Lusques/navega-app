import { Component, OnInit } from '@angular/core';

interface navItem {
  icon: string;
  alt?: string;
  text: string;
  path: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
})
export class NavigationComponent implements OnInit {
  sidebarItems: navItem[] = [
    {
      icon: '/assets/icons/file-invoice-dollar.svg',
      text: 'Ver extrato',
      path: 'dashboard/statement',
    },
    {
      icon: '/assets/icons/envelope-open-dollar.svg',
      text: 'Contribuição Mensal',
      path: 'dashboard/monthly-contribution',
    },
    {
      icon: '/assets/icons/sack-dollar.svg',
      text: 'Contribuição Extra',
      path: 'dashboard/extra-contribution',
    },
    {
      icon: '/assets/icons/file-alt.svg',
      text: 'Documentos',
      path: 'dashboard/documents',
    },
    {
      icon: '/assets/icons/user-chart.svg',
      text: 'Regime de Tributação',
      path: 'dashboard/tax-regime',
    },
    {
      icon: '/assets/icons/comment-dollar.svg',
      text: 'Solicitar Benefício',
      path: 'dashboard/request-benefit',
    },
    {
      icon: '/assets/icons/file-chart-line.svg',
      text: 'Extrato Regressivo',
      path: 'dashboard/regressive-statement',
    },
    {
      icon: '/assets/icons/info.svg',
      text: 'Informações',
      path: 'dashboard/information',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
