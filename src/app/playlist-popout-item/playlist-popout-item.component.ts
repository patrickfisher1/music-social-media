import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-popout-item',
  templateUrl: './playlist-popout-item.component.html',
  styleUrls: ['./playlist-popout-item.component.css'],
})
export class PlaylistPopoutItemComponent implements OnInit {
  constructor() {}
  @Input() imgPath: string;
  @Input() albumPath: string;
  @Input() song: string;
  @Input() artist: string;
  @Input() album: string;
  @Input() link: string;

  ngOnInit(): void {}
}
