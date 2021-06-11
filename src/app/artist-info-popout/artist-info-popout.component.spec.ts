import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistInfoPopoutComponent } from './artist-info-popout.component';

describe('ArtistInfoPopoutComponent', () => {
  let component: ArtistInfoPopoutComponent;
  let fixture: ComponentFixture<ArtistInfoPopoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtistInfoPopoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistInfoPopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
