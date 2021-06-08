import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPopoutComponent } from './comment-popout.component';

describe('CommentPopoutComponent', () => {
  let component: CommentPopoutComponent;
  let fixture: ComponentFixture<CommentPopoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentPopoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentPopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
