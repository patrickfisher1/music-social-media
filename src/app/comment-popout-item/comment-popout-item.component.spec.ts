import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistPopoutItemComponent } from './comment-popout-item.component';

describe('CommentPopoutItemComponent', () => {
  let component: CommentPopoutItemComponent;
  let fixture: ComponentFixture<CommentPopoutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentPopoutItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentPopoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
