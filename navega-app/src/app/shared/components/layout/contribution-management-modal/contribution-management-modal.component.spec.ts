import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionManagementModalComponent } from './contribution-management-modal.component';

describe('ContributionManagementModalComponent', () => {
  let component: ContributionManagementModalComponent;
  let fixture: ComponentFixture<ContributionManagementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributionManagementModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributionManagementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
