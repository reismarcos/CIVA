import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DadosPage } from '../dados/dados';
import { ConfigPage } from '../config/config';
import { HistoricoPage } from '../historico/historico';
import { InfoPage } from '../info/info';
import { LoginPage } from '../login/login';
import { ProximaPage } from '../proxima/proxima';
import { QrcodePage } from '../qrcode/qrcode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.navCtrl=navCtrl;
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
