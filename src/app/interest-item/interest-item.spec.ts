import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestItem } from './interest-item';

describe('InterestItem', () => {
  let component: InterestItem;
  let fixture: ComponentFixture<InterestItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestItem],
    }).compileComponents();

    fixture = TestBed.createComponent(InterestItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
