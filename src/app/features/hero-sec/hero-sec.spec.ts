import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSec } from './hero-sec';

describe('HeroSec', () => {
  let component: HeroSec;
  let fixture: ComponentFixture<HeroSec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSec);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
