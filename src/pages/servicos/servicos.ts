import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Servico } from "../../shared";

@IonicPage()
@Component({
  selector: "page-servicos",
  templateUrl: "servicos.html",
})
export class ServicosPage {
  servicos: Array<Servico> = [
    { id: 1, nome: "Elétrico", telefone: "5561984137835", mensagem: "Bom dia" },
    {
      id: 2,
      nome: "Hidráulico",
      telefone: "5561984137835",
      mensagem: "Bom dia",
    },
    {
      id: 3,
      nome: "Transporte",
      telefone: "5561984137835",
      mensagem: "Bom dia",
    },
    {
      id: 4,
      nome: "Informática",
      telefone: "5561984137835",
      mensagem: "Bom dia",
    },
    {
      id: 5,
      nome: "Marcenaria",
      telefone: "5561984137835",
      mensagem: "Bom dia",
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ServicosPage");
  }
}
