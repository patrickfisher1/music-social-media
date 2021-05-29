import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-playlists-recommend-item',
  templateUrl: './friends-playlists-recommend-item.component.html',
  styleUrls: ['./friends-playlists-recommend-item.component.css']
})
export class FriendsPlaylistsRecommendItemComponent implements OnInit {

  constructor() { }
    @Input() link: string;
      @Input() playlistName: string;
    @Input() song: string;
    @Input() artist: string;
    @Input() length: string;

  ngOnInit(): void {
  }

}
