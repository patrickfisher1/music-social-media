import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTracksPopoutItemComponent } from './album-tracks-popout-item.component';

describe('AlbumTracksPopoutItemComponent', () => {
  let component: AlbumTracksPopoutItemComponent;
  let fixture: ComponentFixture<AlbumTracksPopoutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumTracksPopoutItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumTracksPopoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
