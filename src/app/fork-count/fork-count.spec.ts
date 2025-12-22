import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkCount } from './fork-count';

describe('ForkCount', () => {
  let component: ForkCount;
  let fixture: ComponentFixture<ForkCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForkCount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForkCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
