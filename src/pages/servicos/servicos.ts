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
    {
      id: 1,
      nome: "Elétrico",
      telefone: "5561984137835",
      mensagem: "Bom dia, sobre os serviços eletricos",
    },
    {
      id: 2,
      nome: "Hidráulico",
      telefone: "5561984137835",
      mensagem: "Bom dia, sobre os serviços Hidráulicos",
    },
    {
      id: 3,
      nome: "Transporte",
      telefone: "5561984137835",
      mensagem: "Bom dia, sobre os serviços de transporte",
    },
    {
      id: 4,
      nome: "Informática",
      telefone: "5561984137835",
      mensagem: "Bom dia, sobre os serviços de informatica",
    },
    {
      id: 5,
      nome: "Marcenaria",
      telefone: "5561984137835",
      mensagem: "Bom dia, sobre os serviços de marcenaria",
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  // ionViewDidLoad() {
  //   console.log("ionViewDidLoad ServicosPage");
  // }

  apiwhatsapp(servico: Servico): string {
    const mensagem = servico.mensagem;
    const fone = servico.telefone;
    const link = `https://wa.me/${fone}?text=${mensagem}`;
    return link;
  }
}
