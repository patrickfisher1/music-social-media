import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongInfoPopoutComponent } from './song-info-popout.component';

describe('SongInfoPopoutComponent', () => {
  let component: SongInfoPopoutComponent;
  let fixture: ComponentFixture<SongInfoPopoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SongInfoPopoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongInfoPopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
