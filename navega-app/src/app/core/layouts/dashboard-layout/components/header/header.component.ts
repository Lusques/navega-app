import { Router } from '@angular/router';
import { MenuComponent } from '../../../../../shared/components/layout/menu/menu.component';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { MaskService } from 'src/app/core/services/dashboard/mask.service';
import { MonthlyContributionService } from 'src/app/core/services/dashboard/monthly-contribution.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  @Output() headerClicked = new EventEmitter<void>();
  @Output() signOut = new EventEmitter<void>();
  @ViewChild('menu') menuCommponent!: MenuComponent;

  constructor(
    private contributionService: MonthlyContributionService,
    private maskService: MaskService,
    private authService: AuthService,
    private router: Router
  ) {}
  hiddenTopHeader = false;
  items = [
    {
      label: 'Sair',
      icon: 'pi pi-sign-out',
      command: () => {
        this.onSignOut();
      },
    },
  ];

  ngOnInit(): void {}

  notifyClick() {
    this.headerClicked.emit();
    this.toggleHiddenTopHeader();
  }
  onSignOut() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
  clearData() {
    this.contributionService.deleteDataLS();
    window.location.reload();
  }
  toggleMenu(event: Event) {
    this.menuCommponent.toggleMenu(event);
  }
  toggleMask() {
    this.maskService.togleMask();
  }
  toggleHiddenTopHeader() {
    this.hiddenTopHeader = !this.hiddenTopHeader;
  }
}
