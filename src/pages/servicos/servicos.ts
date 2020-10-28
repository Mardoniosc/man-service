import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

export interface Servico {
  id: number,
  nome: string,
}
@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})
export class ServicosPage {

  servicos: Array<Servico> = [
    {id: 1, nome: 'Elétrico'},
    {id: 2, nome: 'Hidráulico'},
    {id: 3, nome: 'Transporte'},
    {id: 4, nome: 'Informática'},
    {id: 5, nome: 'Marcenaria'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicosPage');
  }

}
