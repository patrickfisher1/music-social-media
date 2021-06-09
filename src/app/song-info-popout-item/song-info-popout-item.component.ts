import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-info-popout-item',
  templateUrl: './song-info-popout-item.component.html',
  styleUrls: ['./song-info-popout-item.component.css'],
})
export class SongInfoPopoutItemComponent implements OnInit {
  constructor() {}
  @Input() imgPath: string;
  @Input() albumPath: string;
  @Input() song: string;
  @Input() artist: string;
  @Input() album: string;
  @Input() link: string;

  ngOnInit(): void {}
}
