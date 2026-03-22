import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestTypeSelect } from './interest-type-select';

describe('InterestTypeSelect', () => {
  let component: InterestTypeSelect;
  let fixture: ComponentFixture<InterestTypeSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestTypeSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(InterestTypeSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
