import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInfoPopoutComponent } from './event-info-popout.component';

describe('EventInfoPopoutComponent', () => {
  let component: EventInfoPopoutComponent;
  let fixture: ComponentFixture<EventInfoPopoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventInfoPopoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInfoPopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
