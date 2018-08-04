import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HTTP} from '@ionic-native/http';
/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {
  public movieDetails:string;
  public item;
  public ratings;

  

  constructor(public http: HTTP, public navCtrl: NavController, public navParams: NavParams) {
    this.movieDetails = navParams.get("movieDetails");
  }

  ionViewDidLoad() {
    console.log(this.movieDetails);
    let url = "http://www.omdbapi.com/?t="+ encodeURI(this.movieDetails) + "&type=movie&plot=full&apikey=bb7201bc";
    console.log(url);
    this.http.get(url, {}, {})
    .then(response => {
      console.log("response", response);
  
      this.item= JSON.parse(response.data);
      console.log("data", this.item);
      this.ratings = this.item.Ratings;
      console.log(this.ratings);
    })

  
    .catch(error => {
      console.error(error);
    });
    
  }

}
