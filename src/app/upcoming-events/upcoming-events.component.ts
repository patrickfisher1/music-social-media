import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css'],
})
export class UpcomingEventsComponent implements OnInit {
  constructor() {}
  @Input() upcomingEventsItems: string[][] = [];

  ngOnInit(): void {}
}
