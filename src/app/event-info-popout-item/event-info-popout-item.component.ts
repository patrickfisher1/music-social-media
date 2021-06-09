import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-info-popout-item',
  templateUrl: './event-info-popout-item.component.html',
  styleUrls: ['./event-info-popout-item.component.css'],
})
export class EventInfoPopoutItemComponent implements OnInit {
  constructor() {}
  @Input() imgPath: string;
  @Input() albumPath: string;
  @Input() song: string;
  @Input() artist: string;
  @Input() album: string;
  @Input() link: string;

  ngOnInit(): void {}
}
