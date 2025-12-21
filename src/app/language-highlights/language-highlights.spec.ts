import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageHighlights } from './language-highlights';

describe('LanguageHighlights', () => {
  let component: LanguageHighlights;
  let fixture: ComponentFixture<LanguageHighlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageHighlights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageHighlights);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
