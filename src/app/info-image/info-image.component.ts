import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-image',
  templateUrl: './info-image.component.html',
  styleUrls: ['./info-image.component.css']
})
export class InfoImageComponent implements OnInit {

  constructor() { }
  @Input() text: string;
  @Input() imgPath: string;

  ngOnInit(): void {
  }

}
