import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInfoPopoutItemComponent } from './event-info-popout-item.component';

describe('EventInfoPopoutItemComponent', () => {
  let component: EventInfoPopoutItemComponent;
  let fixture: ComponentFixture<EventInfoPopoutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventInfoPopoutItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInfoPopoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
