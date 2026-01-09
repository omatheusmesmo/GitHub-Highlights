import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCount } from './repo-count';

describe('RepoCount', () => {
  let component: RepoCount;
  let fixture: ComponentFixture<RepoCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoCount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
