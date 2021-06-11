import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAlbumsPopoutItemComponent } from './artist-albums-popout-item.component';

describe('ArtistAlbumsPopoutItemComponent', () => {
  let component: ArtistAlbumsPopoutItemComponent;
  let fixture: ComponentFixture<ArtistAlbumsPopoutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AritstAlbumsPopoutItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistAlbumsPopoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
