import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAuthIdentifierComponent } from './input-auth-identifier.component';

describe('InputAuthIdentifierComponent', () => {
  let component: InputAuthIdentifierComponent;
  let fixture: ComponentFixture<InputAuthIdentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAuthIdentifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAuthIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
