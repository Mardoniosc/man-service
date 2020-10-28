import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
} from "ionic-angular";
import { Usuario } from "../../shared";
import { StorangeService } from "../../shared/services";

@IonicPage()
@Component({
  selector: "page-administrador",
  templateUrl: "administrador.html",
})
export class AdministradorPage {
  usuarios: Usuario[] = [
    { id: 1, nomeSobrenome: "Fernando Cledicis", localidade: "São Sebastião" },
    { id: 2, nomeSobrenome: "Marcos Hyodao", localidade: "Aguas Claras" },
    { id: 3, nomeSobrenome: "Natasha Pixai", localidade: "Luziânia" },
    { id: 4, nomeSobrenome: "Maria Miclous", localidade: "Ocidental" },
    { id: 5, nomeSobrenome: "Helena Lowoil", localidade: "Guará" },
    { id: 6, nomeSobrenome: "Luiz Duguba", localidade: "Taguatinga" },
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public storangeService: StorangeService
  ) {}

  // ionViewDidLoad() {
  //   console.log("ionViewDidLoad AdministradorPage");
  // }

  detalhesUser(user: Usuario) {
    this.storangeService.setLocalUser(user);
    this.navCtrl.push('DetailsUserPage')
  }

  logout(): void {
    this.navCtrl.setRoot("HomePage");
  }
}
