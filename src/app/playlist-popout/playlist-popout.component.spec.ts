import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistPopoutComponent } from './playlist-popout.component';

describe('PlaylistPopoutComponent', () => {
  let component: PlaylistPopoutComponent;
  let fixture: ComponentFixture<PlaylistPopoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistPopoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistPopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});