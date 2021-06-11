import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentPopoutComponent } from '../comment-popout/comment-popout.component';

@Component({
  selector: 'app-song-info-popout',
  templateUrl: './song-info-popout.component.html',
  styleUrls: ['./song-info-popout.component.css'],
})
export class SongInfoPopoutComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  @Input() songName = 'Sample Song';
  @Input() songLen = '3:17';
  @Input() artist = 'Sample Artist';
  @Input() album = 'Sample Album'
  @Input() songInfoItems: string[][] = [];
	open(content): void {
    this.modalService.open(content, { modalDialogClass: 'hidden-modal' });
  }
  ngOnInit(): void {
    this.songInfoItems.push([
      'Lyrics',
      'These are the lyrics to a song. This song is very short. It is just here to say. I am text to save the day. By which I mean avoid an empty block. These are the lyrics to this song.',
    ]);
    this.songInfoItems.push([
      'Background',
      'This song was written by Sample Artist to fulfill a visual requirement.',
    ]);
	 this.songInfoItems.push([
      'Misc. Info',
      'Any other known info can be added here. Whatever people are interested in. Or some of Spotify\'s info on various artists and songs.',
    ]);
  }
}
