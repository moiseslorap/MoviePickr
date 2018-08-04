import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {MoviesPage} from '../pages/movies/movies';
import {MovieDetailsPage} from '../pages/movie-details/movie-details';

import {TheathersPage} from '../pages/theathers/theathers';
import {TheatherDetailsPage} from '../pages/theather-details/theather-details';

import { FavoritesPage } from '../pages/favorites/favorites';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StorageProvider } from '../providers/storage/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    MyApp,
    MoviesPage,
    MovieDetailsPage,
    TheathersPage,
    TheatherDetailsPage,
    FavoritesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MoviesPage,
    MovieDetailsPage,
    TheathersPage,
    TheatherDetailsPage,
    FavoritesPage,
    TabsPage
  ],
  providers: [
    HTTP,
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    
  ]
})
export class AppModule {}
