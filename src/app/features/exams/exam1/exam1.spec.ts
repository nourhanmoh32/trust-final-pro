import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam1 } from './exam1';

describe('Exam1', () => {
  let component: Exam1;
  let fixture: ComponentFixture<Exam1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exam1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exam1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
