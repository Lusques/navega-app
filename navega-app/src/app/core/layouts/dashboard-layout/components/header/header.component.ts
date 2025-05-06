import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MaskService } from 'src/app/core/services/dashboard/mask.service';
import { MonthlyContributionService } from 'src/app/core/services/dashboard/monthly-contribution.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  @Output() headerClicked = new EventEmitter<void>();
  hiddenTopHeader = false;
  constructor(
    private contributionService: MonthlyContributionService,
    private maskService: MaskService
  ) {}

  ngOnInit(): void {}

  notifyClick() {
    this.headerClicked.emit();
    this.toggleHiddenTopHeader();
  }
  clearData() {
    this.contributionService.deleteDataLS();
    window.location.reload();
  }
  toggleMask() {
    this.maskService.togleMask();
  }
  toggleHiddenTopHeader() {
    this.hiddenTopHeader = !this.hiddenTopHeader;
  }
}
