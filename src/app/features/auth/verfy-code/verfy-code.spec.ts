import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfyCode } from './verfy-code';

describe('VerfyCode', () => {
  let component: VerfyCode;
  let fixture: ComponentFixture<VerfyCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerfyCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerfyCode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
