import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-recents-item',
  templateUrl: './friends-recents-item.component.html',
  styleUrls: ['./friends-recents-item.component.css'],
})
export class FriendsRecentsItemComponent implements OnInit {
  constructor() {}
  @Input() imgPath: string;
  @Input() albumPath: string;
  @Input() username: string;
  @Input() song: string;
  @Input() artist: string;
  @Input() album: string;
  @Input() link: string;

  ngOnInit(): void {}
}
