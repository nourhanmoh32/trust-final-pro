import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsDash } from './lessons-dash';

describe('LessonsDash', () => {
  let component: LessonsDash;
  let fixture: ComponentFixture<LessonsDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonsDash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsDash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
