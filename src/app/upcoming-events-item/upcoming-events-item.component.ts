import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-events-item',
  templateUrl: './upcoming-events-item.component.html',
  styleUrls: ['./upcoming-events-item.component.css'],
})
export class UpcomingEventsItemComponent implements OnInit {
  constructor() {}
  @Input() imgPath: string;
  @Input() artPath: string;
  @Input() artist: string;
  @Input() venue: string;
  @Input() date: string;
  @Input() link: string;

  ngOnInit(): void {}
}
