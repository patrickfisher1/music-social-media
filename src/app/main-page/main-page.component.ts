import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentPopoutComponent } from '../comment-popout/comment-popout.component';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  feedItems: string[][] = [];
  friendsRecentsItems: string[][] = [];
  friendsPlaylistsRecommendItems: string[][] = [];
  generalRecommendMusicItems: string[][] = [];
  upcomingEventsItems: string[][] = [];
    open(content): void {
    this.modalService.open(content, { modalDialogClass: 'hidden-modal' });
  }

  ngOnInit(): void {
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push(['Example', 'https://picsum.photos/200', 'username']);
    this.feedItems.push([
      'Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.',
      'https://picsum.photos/200',
      'username',
    ]);

    this.friendsRecentsItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'username',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.friendsRecentsItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'username',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.friendsRecentsItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'username',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.friendsRecentsItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'username',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.friendsRecentsItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'username',
      'songName',
      'artistName',
      'albumName',
    ]);

    this.friendsPlaylistsRecommendItems.push([
      'https://picsum.photos/200',
      'playlistName',
      'song',
      'artist',
      '3:10',
    ]);
    this.friendsPlaylistsRecommendItems.push([
      'https://picsum.photos/200',
      'playlistName',
      'song',
      'artist',
      '3:56',
    ]);
    this.friendsPlaylistsRecommendItems.push([
      'https://picsum.photos/200',
      'playlistName',
      'song',
      'artist',
      '4:09',
    ]);
    this.friendsPlaylistsRecommendItems.push([
      'https://picsum.photos/200',
      'playlistName',
      'song',
      'artist',
      '3:10',
    ]);
    this.friendsPlaylistsRecommendItems.push([
      'https://picsum.photos/200',
      'playlistName',
      'song',
      'artist',
      '3:56',
    ]);
    this.friendsPlaylistsRecommendItems.push([
      'https://picsum.photos/200',
      'playlistName',
      'song',
      'artist',
      '4:09',
    ]);
    this.friendsPlaylistsRecommendItems.push([
      'https://picsum.photos/200',
      'playlistName',
      'song',
      'artist',
      '3:10',
    ]);
    this.friendsPlaylistsRecommendItems.push([
      'https://picsum.photos/200',
      'playlistName',
      'song',
      'artist',
      '3:56',
    ]);
    this.friendsPlaylistsRecommendItems.push([
      'https://picsum.photos/200',
      'playlistName',
      'song',
      'artist',
      '4:09',
    ]);
    this.friendsPlaylistsRecommendItems.push([
      'https://picsum.photos/200',
      'playlistName',
      'song',
      'artist',
      '3:10',
    ]);
    this.friendsPlaylistsRecommendItems.push([
      'https://picsum.photos/200',
      'playlistName',
      'song',
      'artist',
      '3:56',
    ]);
    this.friendsPlaylistsRecommendItems.push([
      'https://picsum.photos/200',
      'playlistName',
      'song',
      'artist',
      '4:09',
    ]);

    this.generalRecommendMusicItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'username',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.generalRecommendMusicItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'username',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.generalRecommendMusicItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'username',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.generalRecommendMusicItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'username',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.generalRecommendMusicItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'username',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.generalRecommendMusicItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'username',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.generalRecommendMusicItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'username',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.generalRecommendMusicItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'username',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.generalRecommendMusicItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'username',
      'songName',
      'artistName',
      'albumName',
    ]);

    this.upcomingEventsItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'artist',
      'venue',
      'YYYY/MM/DD',
    ]);
    this.upcomingEventsItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'artist',
      'venue',
      'YYYY/MM/DD',
    ]);
    this.upcomingEventsItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'artist',
      'venue',
      'YYYY/MM/DD',
    ]);
    this.upcomingEventsItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'artist',
      'venue',
      'YYYY/MM/DD',
    ]);
    this.upcomingEventsItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'artist',
      'venue',
      'YYYY/MM/DD',
    ]);
    this.upcomingEventsItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'artist',
      'venue',
      'YYYY/MM/DD',
    ]);
    this.upcomingEventsItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'artist',
      'venue',
      'YYYY/MM/DD',
    ]);
    this.upcomingEventsItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'artist',
      'venue',
      'YYYY/MM/DD',
    ]);
  }
}
