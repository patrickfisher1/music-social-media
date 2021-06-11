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
import { GeneralRecommendMusicComponent } from './general-recommend-music/general-recommend-music.component';
import { GeneralRecommendMusicItemComponent } from './general-recommend-music-item/general-recommend-music-item.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { UpcomingEventsItemComponent } from './upcoming-events-item/upcoming-events-item.component';
import { PlaylistPopoutComponent } from './playlist-popout/playlist-popout.component';
import { PlaylistPopoutItemComponent } from './playlist-popout-item/playlist-popout-item.component';
import { CommentPopoutComponent } from './comment-popout/comment-popout.component';
import { CommentPopoutItemComponent } from './comment-popout-item/comment-popout-item.component';
import { SongInfoPopoutComponent } from './song-info-popout/song-info-popout.component';
import { SongInfoPopoutItemComponent } from './song-info-popout-item/song-info-popout-item.component';
import { EventInfoPopoutComponent } from './event-info-popout/event-info-popout.component';
import { EventInfoPopoutItemComponent } from './event-info-popout-item/event-info-popout-item.component';
import { EventLineupPopoutItemComponent } from './event-lineup-popout-item/event-lineup-popout-item.component';
import { AlbumInfoPopoutComponent } from './album-info-popout/album-info-popout.component';
import { AlbumInfoPopoutItemComponent } from './album-info-popout-item/album-info-popout-item.component';
import { AlbumTracksPopoutItemComponent } from './album-tracks-popout-item/album-tracks-popout-item.component';
import { ArtistInfoPopoutComponent } from './artist-info-popout/artist-info-popout.component';
import { ArtistInfoPopoutItemComponent } from './artist-info-popout-item/artist-info-popout-item.component';
import { ArtistAlbumsPopoutItemComponent } from './artist-albums-popout-item/artist-albums-popout-item.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    GeneralRecommendMusicItemComponent,
    UpcomingEventsComponent,
    UpcomingEventsItemComponent,
    PlaylistPopoutComponent,
    PlaylistPopoutItemComponent,
    CommentPopoutComponent,
    CommentPopoutItemComponent,
    SongInfoPopoutComponent,
    SongInfoPopoutItemComponent,
    EventInfoPopoutComponent,
    EventInfoPopoutItemComponent,
	AlbumInfoPopoutComponent,
	AlbumInfoPopoutItemComponent,
	AlbumTracksPopoutItemComponent,
	ArtistInfoPopoutComponent,
	ArtistInfoPopoutItemComponent,
	ArtistAlbumsPopoutItemComponent,
	EventLineupPopoutItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
