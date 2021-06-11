import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-album-info-popout',
  templateUrl: './album-info-popout.component.html',
  styleUrls: ['./album-info-popout.component.css'],
})
export class AlbumInfoPopoutComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  @Input() albumName = 'The Album Name';
  @Input() albumLen = '1:11:17';
  @Input() numSongs = '9';
  @Input() artist = 'The Band';
  @Input() albumItems: string[][] = [];
  @Input() albumInfoItems: string[][] = [];
	
	open(content): void {
    this.modalService.open(content, { modalDialogClass: 'hidden-modal' });
  }
  ngOnInit(): void {
    this.albumItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.albumItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.albumItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.albumItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.albumItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.albumItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.albumItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.albumItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
    this.albumItems.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'songName',
      'artistName',
      'albumName',
    ]);
	
	 this.albumInfoItems.push([
      'History',
      'This album was recorded in Chicago to fulfill a visual requirement. The Band loved making this tedious work.',
    ]);
    this.albumInfoItems.push([
      'Background',
      'This album was written by The Band to fulfill a visual requirement.',
    ]);
	 this.albumInfoItems.push([
      'Misc. Info',
      'Any other known info can be added here. Whatever people are interested in. Or some of Spotify\'s info on various artists and songs. Or links to where we can purchase the album.',
    ]);
  }
}
