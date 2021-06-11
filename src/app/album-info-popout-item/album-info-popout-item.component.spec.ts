import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumInfoPopoutItemComponent } from './album-info-popout-item.component';

describe('AlbumInfoPopoutItemComponent', () => {
  let component: AlbumInfoPopoutItemComponent;
  let fixture: ComponentFixture<AlbumInfoPopoutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumInfoPopoutItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumInfoPopoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
