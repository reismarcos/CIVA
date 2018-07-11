import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VacinaPage } from '../vacina/vacina';

/**
 * Generated class for the ProximaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proxima',
  templateUrl: 'proxima.html',
})
export class ProximaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl=navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProximaPage');
  }

  openVacina() {
    this.navCtrl.push(VacinaPage);
  }
}
