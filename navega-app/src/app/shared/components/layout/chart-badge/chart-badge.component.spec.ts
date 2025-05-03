import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBadgeComponent } from './chart-badge.component';

describe('ChartBadgeComponent', () => {
  let component: ChartBadgeComponent;
  let fixture: ComponentFixture<ChartBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
