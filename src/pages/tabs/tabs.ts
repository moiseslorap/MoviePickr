import { Component } from '@angular/core';

import {MoviesPage} from '../movies/movies';
import {TheathersPage} from '../theathers/theathers';
import { FavoritesPage } from '../favorites/favorites';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MoviesPage;
  tab2Root = TheathersPage;
  tab3Root = FavoritesPage;

  constructor() {

  }
}
