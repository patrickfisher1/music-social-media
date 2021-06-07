import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-recommend-music',
  templateUrl: './general-recommend-music.component.html',
  styleUrls: ['./general-recommend-music.component.css'],
})
export class GeneralRecommendMusicComponent implements OnInit {
  constructor() {}
  @Input() generalRecommendMusicItems: string[][] = [];

  ngOnInit(): void {}
}
