import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemComponent implements OnInit {

  constructor() { }
  @Input() text: string;
  @Input() imgPath: string;
  @Input() link: string;

  ngOnInit(): void {
  }

}
