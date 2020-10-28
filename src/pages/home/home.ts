import { Component } from "@angular/core";
import { NavController, IonicPage, MenuController } from "ionic-angular";

export interface Credenciais {
  email: string;
  senha: string;
}
@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  creds: Credenciais = {
    email: "",
    senha: "",
  };

  constructor(public navCtrl: NavController, public menu: MenuController) {}

  login() {
    if (this.creds.email === "admin" && this.creds.senha === "admin") {
      this.navCtrl.setRoot("AdministradorPage");
    } else {
      this.menu.swipeEnable(true);
      this.navCtrl.setRoot("ServicosPage");
    }
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
}
