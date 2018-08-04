import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TheatherDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-theather-details',
  templateUrl: 'theather-details.html',
})
export class TheatherDetailsPage {
  public theatherDetails;
  public showtimes;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.theatherDetails = navParams.get("theatherDetails");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheatherDetailsPage');
    console.log(this.theatherDetails);
    this.showtimes = this.theatherDetails.showtimes;
  }

}
