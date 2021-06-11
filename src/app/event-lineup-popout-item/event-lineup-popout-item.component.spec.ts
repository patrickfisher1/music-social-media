import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLineupPopoutItemComponent } from './event-lineup-popout-item.component';

describe('EventLineupPopoutItemComponent', () => {
  let component: EventLineupPopoutItemComponent;
  let fixture: ComponentFixture<EventLineupPopoutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventLineupPopoutItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLineupPopoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
