import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.css']
})
export class MainFeedComponent implements OnInit {

  constructor() { }
  @Input() feedItems: string[][] = [];

  ngOnInit(): void {
  }

}
