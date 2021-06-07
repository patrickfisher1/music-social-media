import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsPlaylistsRecommendComponent } from './friends-playlists-recommend.component';

describe('FriendsPlaylistsRecommendComponent', () => {
  let component: FriendsPlaylistsRecommendComponent;
  let fixture: ComponentFixture<FriendsPlaylistsRecommendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FriendsPlaylistsRecommendComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsPlaylistsRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
