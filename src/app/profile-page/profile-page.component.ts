import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlaylistPopoutComponent } from '../playlist-popout/playlist-popout.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfilePageComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  firstName = 'Patrick';
  lastName = 'Fisher';
  location = 'Chicago, IL';
  favArtist = 'Artist';
  favAlbum = 'Album';
  favSong = 'Song';
  friendsList: string[][] = [];
  recentlyPlayed: string[][] = [];
  highlightedPlaylists: string[][] = [];
  highlightedAlbumsArtists: string[][] = [];
  open(content): void {
    this.modalService.open(content, { modalDialogClass: 'hidden-modal' });
  }

  ngOnInit(): void {
    this.recentlyPlayed.push(['song 1', 'https://picsum.photos/200']);
    this.recentlyPlayed.push(['song 2', 'https://picsum.photos/200']);
    this.recentlyPlayed.push(['song 3', 'https://picsum.photos/200']);
    this.recentlyPlayed.push(['song 4', 'https://picsum.photos/200']);
    this.recentlyPlayed.push(['song 5', 'https://picsum.photos/200']);
    this.recentlyPlayed.push(['song 6', 'https://picsum.photos/200']);
    this.recentlyPlayed.push(['song 7', 'https://picsum.photos/200']);
    this.recentlyPlayed.push(['song 8', 'https://picsum.photos/200']);
    this.recentlyPlayed.push(['song 9', 'https://picsum.photos/200']);
    this.recentlyPlayed.push(['song 10', 'https://picsum.photos/200']);

    this.highlightedPlaylists.push(['playlist 1', 'https://picsum.photos/200']);
    this.highlightedPlaylists.push(['playlist 2', 'https://picsum.photos/200']);
    this.highlightedPlaylists.push(['playlist 3', 'https://picsum.photos/200']);
    this.highlightedPlaylists.push(['playlist 4', 'https://picsum.photos/200']);

    this.highlightedAlbumsArtists.push([
      'album 1',
      'https://picsum.photos/200',
    ]);
    this.highlightedAlbumsArtists.push([
      'album 2',
      'https://picsum.photos/200',
    ]);
    this.highlightedAlbumsArtists.push([
      'artist 3',
      'https://picsum.photos/200',
    ]);
    this.highlightedAlbumsArtists.push([
      'artist 4',
      'https://picsum.photos/200',
    ]);

    this.friendsList.push(['Friendfirst FriendLast', 'friend_url']);
    this.friendsList.push(['Friendfirst FriendLast', 'friend_url']);
    this.friendsList.push(['Friendfirst FriendLast', 'friend_url']);
    this.friendsList.push(['Friendfirst FriendLast', 'friend_url']);
    this.friendsList.push(['Friendfirst FriendLast', 'friend_url']);
  }
}
