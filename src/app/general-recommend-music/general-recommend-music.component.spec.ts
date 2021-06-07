import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRecommendMusicComponent } from './general-recommend-music.component';

describe('GeneralRecommendMusicComponent', () => {
  let component: GeneralRecommendMusicComponent;
  let fixture: ComponentFixture<GeneralRecommendMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralRecommendMusicComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRecommendMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
