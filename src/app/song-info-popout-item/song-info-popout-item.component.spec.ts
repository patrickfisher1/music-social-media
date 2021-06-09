import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongInfoPopoutItemComponent } from './song-info-popout-item.component';

describe('SongInfoPopoutItemComponent', () => {
  let component: SongInfoPopoutItemComponent;
  let fixture: ComponentFixture<SongInfoPopoutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SongInfoPopoutItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongInfoPopoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
