import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsLayout } from './lessons-layout';

describe('LessonsLayout', () => {
  let component: LessonsLayout;
  let fixture: ComponentFixture<LessonsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonsLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
