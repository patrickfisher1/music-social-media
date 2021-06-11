import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumInfoPopoutComponent } from './album-info-popout.component';

describe('AlbumInfoPopoutComponent', () => {
  let component: AlbumInfoPopoutComponent;
  let fixture: ComponentFixture<AlbumInfoPopoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumInfoPopoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumInfoPopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
