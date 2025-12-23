import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam2 } from './exam2';

describe('Exam2', () => {
  let component: Exam2;
  let fixture: ComponentFixture<Exam2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exam2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exam2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
