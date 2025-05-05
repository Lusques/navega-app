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
  constructor(
    private contributionService: MonthlyContributionService,
    private maskService: MaskService
  ) {}

  ngOnInit(): void {}

  notifyClick() {
    this.headerClicked.emit();
  }
  clearData() {
    this.contributionService.deleteDataLS();
    window.location.reload();
  }
  toggleMask() {
    this.maskService.togleMask();
  }
}
