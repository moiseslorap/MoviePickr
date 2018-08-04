import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HTTP} from '@ionic-native/http';
import { MovieDetailsPage } from '../movie-details/movie-details';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  public items;
  public query:string;


  constructor(public http: HTTP, public navCtrl: NavController, public navParams: NavParams) {
  }

  private goToMovieDetailsPage(movie){
    this.navCtrl.push(MovieDetailsPage,{
      //operation object will be available on details page from
      // the nav controller as 'operationDetails'
      movieDetails: movie
    });
  }
  request(){
    let key = 'bb7201bc';
    let url = "http://www.omdbapi.com/?s="+ this.query + "&type=movie&plot=full&apikey=" + key;
    //url
    //param
    //headers
    this.http.get(url, {}, {})
    .then(response => {
      console.log("response", response);

      let data= JSON.parse(response.data);
      this.items = data.Search;
      console.log("data", this.items);
      
    })

    .catch(error => {
      console.error(error);
    });
  }

 
}
