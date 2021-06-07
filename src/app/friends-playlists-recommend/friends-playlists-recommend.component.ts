import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-playlists-recommend',
  templateUrl: './friends-playlists-recommend.component.html',
  styleUrls: ['./friends-playlists-recommend.component.css'],
})
export class FriendsPlaylistsRecommendComponent implements OnInit {
  constructor() {}
  @Input() friendsPlaylistsRecommendItems: string[][] = [];

  ngOnInit(): void {}
}
