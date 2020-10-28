import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Financeiro } from '../../shared';

@IonicPage()
@Component({
  selector: 'page-financeiro',
  templateUrl: 'financeiro.html',
})
export class FinanceiroPage {

  url = 'https://americalatina.dint.fgv.br/sites/americalatina.dint.fgv.br/files/teste33.pdf'

  financeiro: Financeiro[] = [
    {nome: 'Transporte', descricao: 'Viagem de Uber', valor: 20.37, estado: true},
    {nome: 'Hidraulica', descricao: 'Conserto de pia', valor: 45.00, estado: false},
    {nome: 'Eletrica', descricao: 'Troca de tomadas', valor: 30.50, estado: false},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FinanceiroPage');
  // }

  downloadPDF(url: string){
    const filePDF = window.open(url, '_system', 'location=no');
    console.log(filePDF)
  }
}
