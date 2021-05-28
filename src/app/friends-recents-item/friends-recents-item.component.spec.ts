import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsRecentsItemComponent } from './friends-recents-item.component';

describe('FriendsRecentsItemComponent', () => {
  let component: FriendsRecentItemComponent;
  let fixture: ComponentFixture<FriendsRecentsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsRecentsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsRecentsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
