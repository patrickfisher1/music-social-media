import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-recommend-music-item',
  templateUrl: './general-recommend-music-item.component.html',
  styleUrls: ['./general-recommend-music-item.component.css'],
})
export class GeneralRecommendMusicItemComponent implements OnInit {
  constructor() {}
  @Input() imgPath: string;
  @Input() albumPath: string;
  @Input() username: string;
  @Input() song: string;
  @Input() artist: string;
  @Input() album: string;
  @Input() link: string;

  ngOnInit(): void {}
}
