import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRecommendMusicItemComponent } from './general-recommend-music-item.component';

describe('GeneralRecommendMusicItemComponent', () => {
  let component: GeneralRecommendMusicItemComponent;
  let fixture: ComponentFixture<GeneralRecommendMusicItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRecommendMusicItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRecommendMusicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
