import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { TheatherDetailsPage } from '../theather-details/theather-details';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the TheathersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-theathers',
  templateUrl: 'theathers.html',
})
export class TheathersPage {
  public items;
  public query: string;
  public showtimes;
  public poster;

  constructor(public geolocation: Geolocation, public http: HTTP, public navCtrl: NavController, public navParams: NavParams) {
  }
  private goToTheatherDetailsPage(theater) {
    this.navCtrl.push(TheatherDetailsPage, {
      //operation object will be available on details page from
      // the nav controller as 'operationDetails'
      theatherDetails: theater
    });
  }
  ionViewDidLoad() {
    this.displayNearby();
  }

  displayNearby() {
    this.geolocation.getCurrentPosition().then((position) => {


      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      this.request(lat, lng);
    }, (err) => {
      console.log(err);
    });
  }

  request(lat, lng) {
    let key = 'w4m3xwur2n8je4nr4fhs44uh';
    let currentTime = new Date();
    let month = currentTime.getMonth() + 1;
    let day = currentTime.getDate();
    let year = currentTime.getFullYear();
    let date = year + '-' + month + '-' + day;
    let url = "http://data.tmsapi.com/v1.1/movies/showings?startDate=" + date + "&lat="+ lat + "&lng="+ lng + "&radius=10&api_key=" + key;
    //param
    //headers
    this.http.get(url, {}, {})
      .then(response => {
        let data = JSON.parse(response.data);
        for (let i = 0; i < data.length; i++) {
          if(data[i].title)
            console.log(data[i].title);
            data[i].poster = this.requestImage(data[i].title);   
            console.log(data[i].poster);
        }
        console.log(data);
        this.items = data;
      })

      .catch(error => {
        console.error(error);
      });
  }

  requestImage(title) {
    let key = 'bb7201bc';
    let url = "http://www.omdbapi.com/?t=" + encodeURI(title) + "&type=movie&apikey=" + key;
    console.log(url);
    //url
    //param
    //headers
    this.http.get(url, {}, {})
      .then(response => {
        let data = JSON.parse(response.data);
        if(data.Poster){
          console.log(data.Poster);
          return data.Poster;
        }
        else if(data.Poster == 'N/A')
          return "https://vignette.wikia.nocookie.net/theimaginenation/images/e/ed/N-a.jpg/revision/latest?cb=20121209234504";
        else if(!data.Poster)
          return "https://vignette.wikia.nocookie.net/theimaginenation/images/e/ed/N-a.jpg/revision/latest?cb=20121209234504";
      })

      .catch(error => {
        console.error(error);
      });
  }

}
