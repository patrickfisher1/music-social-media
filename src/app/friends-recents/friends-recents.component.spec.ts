import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsRecentsComponent } from './friends-recents.component';

describe('FriendsRecentsComponent', () => {
  let component: FriendsRecentsComponent;
  let fixture: ComponentFixture<FriendsRecentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FriendsRecentsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsRecentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
