import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-popout',
  templateUrl: './playlist-popout.component.html',
  styleUrls: ['./playlist-popout.component.css']
})
export class PlaylistPopoutComponent implements OnInit {

  constructor() { }

  playlistName = 'Music Playlist';
  playlistLen = '2:33:17';
  numSongs = '28';
  playlistCrtr = 'Chuck Berry';
  playlistItems: string[][] = [];
 
  ngOnInit(): void {
    this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
    this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);
	this.playlistItems.push(['https://picsum.photos/200', 'https://picsum.photos/200', 'songName', 'artistName', 'albumName']);	
}
}
