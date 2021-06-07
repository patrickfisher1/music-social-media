import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsPlaylistsRecommendItemComponent } from './friends-playlists-recommend-item.component';

describe('FriendsPlaylistsRecommendItemComponent', () => {
  let component: FriendsPlaylistsRecommendItemComponent;
  let fixture: ComponentFixture<FriendsPlaylistsRecommendItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FriendsPlaylistsRecommendItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsPlaylistsRecommendItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
