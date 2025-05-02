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
      path: '',
    },
    {
      icon: '/assets/icons/envelope-open-dollar.svg',
      text: 'Contribuição Mensal',
      path: '',
    },
    {
      icon: '/assets/icons/sack-dollar.svg',
      text: 'Contribuição Extra',
      path: '',
    },
    {
      icon: '/assets/icons/file-alt.svg',
      text: 'Documentos',
      path: '',
    },
    {
      icon: '/assets/icons/user-chart.svg',
      text: 'Regime de Tributação',
      path: '',
    },
    {
      icon: '/assets/icons/comment-dollar.svg',
      text: 'Solicitar Benefício',
      path: '',
    },
    {
      icon: '/assets/icons/file-chart-line.svg',
      text: 'Extrato Regressivo',
      path: '',
    },
    {
      icon: '/assets/icons/info.svg',
      text: 'Informações',
      path: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
