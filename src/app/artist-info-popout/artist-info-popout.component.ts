import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-artist-info-popout',
  templateUrl: './artist-info-popout.component.html',
  styleUrls: ['./artist-info-popout.component.css'],
})
export class ArtistInfoPopoutComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  @Input() artistName = 'The Band';
  @Input() artistAlbums: string[][] = [];
  @Input() artistInfoItems: string[][] = [];
	
	open(content): void {
    this.modalService.open(content, { modalDialogClass: 'hidden-modal' });
  }
  ngOnInit(): void {
    this.artistAlbums.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.artistAlbums.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.artistAlbums.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.artistAlbums.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.artistAlbums.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.artistAlbums.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.artistAlbums.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.artistAlbums.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.artistAlbums.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
	
	 this.artistInfoItems.push([
      'History',
      'This band was founded in Chicago to fulfill a visual requirement. The Band was founded as a labot of love.',
    ]);
    this.artistInfoItems.push([
      'Background',
      'This band was put together by various artists in their garages to fulfill a visual requirement.',
    ]);
	 this.artistInfoItems.push([
      'Misc. Info',
      'Any other known info can be added here. Whatever people are interested in. Or some of Spotify\'s info on various artists and songs. Or links to where we can purchase the artists music/merchandise.',
    ]);
  }
}
