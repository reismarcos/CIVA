import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadosPage } from '../dados/dados';
import { ConfigPage } from '../config/config';
import { HistoricoPage } from '../historico/historico';
import { InfoPage } from '../info/info';
import { LoginPage } from '../login/login';
import { ProximaPage } from '../proxima/proxima';
import { QrcodePage } from '../qrcode/qrcode';

@IonicPage()
@Component({
  selector: 'page-home-agente',
  templateUrl: 'home-agente.html',
})
export class HomeAgentePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl=navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeAgentePage');
  }
  
  
  openDados() {
    this.navCtrl.push(DadosPage);
  }
  openHistorico() {
    this.navCtrl.push(HistoricoPage);
  }
  openConfig() {
    this.navCtrl.push(ConfigPage);
  }
  openInfo() {
    this.navCtrl.push(InfoPage);
  }
  openProxima() {
    this.navCtrl.push(ProximaPage);
  }
  openQrcode() {
    this.navCtrl.push(QrcodePage);
  }
  
}
