import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistPopoutItemComponent } from './playlist-popout-item.component';

describe('PlaylistPopoutItemComponent', () => {
  let component: PlaylistPopoutItemComponent;
  let fixture: ComponentFixture<PlaylistPopoutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylistPopoutItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistPopoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
