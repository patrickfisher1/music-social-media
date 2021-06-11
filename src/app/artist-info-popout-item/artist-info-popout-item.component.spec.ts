import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistInfoPopoutItemComponent } from './artist-info-popout-item.component';

describe('ArtistInfoPopoutItemComponent', () => {
  let component: ArtistInfoPopoutItemComponent;
  let fixture: ComponentFixture<ArtistInfoPopoutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtistInfoPopoutItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistInfoPopoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
