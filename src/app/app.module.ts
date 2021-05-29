import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { InfoImageComponent } from './info-image/info-image.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { FriendsRecentsComponent } from './friends-recents/friends-recents.component';
import { FriendsRecentsItemComponent } from './friends-recents-item/friends-recents-item.component';
import { FriendsPlaylistsRecommendComponent } from './friends-playlists-recommend/friends-playlists-recommend.component';
import { FriendsPlaylistsRecommendItemComponent } from './friends-playlists-recommend-item/friends-playlists-recommend-item.component';
import { GeneralRecommendMusicComponent} from './general-recommend-music/general-recommend-music.component';
import { GeneralRecommendMusicItemComponent} from './general-recommend-music-item/general-recommend-music-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    InfoImageComponent,
    NavBarComponent,
    FriendsListComponent,
    MainFeedComponent,
    MainPageComponent,
    FeedItemComponent,
    FriendsRecentsComponent,
    FriendsRecentsItemComponent,
    FriendsPlaylistsRecommendComponent,
    FriendsPlaylistsRecommendItemComponent,
	GeneralRecommendMusicComponent,
	GeneralRecommendMusicItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
