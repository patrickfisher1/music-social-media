import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-recents',
  templateUrl: './friends-recents.component.html',
  styleUrls: ['./friends-recents.component.css']
})
export class FriendsRecentsComponent implements OnInit {

  constructor() { }
  @Input() friendsRecentsItems: string[][] = [];

  ngOnInit(): void {
  }

}
