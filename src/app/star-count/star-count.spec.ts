import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarCount } from './star-count';

describe('StarCount', () => {
  let component: StarCount;
  let fixture: ComponentFixture<StarCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarCount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
