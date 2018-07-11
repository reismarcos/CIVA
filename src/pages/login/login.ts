import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrcodePage } from '../qrcode/qrcode';
import { HomeAgentePage } from '../home-agente/home-agente';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl=navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openHomeCliente() {
    this.navCtrl.push(HomePage);
  }

  openAgente() {
    this.navCtrl.push(HomeAgentePage);
  }
  
  
}
