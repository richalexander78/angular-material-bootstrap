import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOfficerProfileComponent } from './loan-officer-profile.component';

describe('LoanOfficerProfileComponent', () => {
  let component: LoanOfficerProfileComponent;
  let fixture: ComponentFixture<LoanOfficerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanOfficerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOfficerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
