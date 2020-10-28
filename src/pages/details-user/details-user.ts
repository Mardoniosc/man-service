import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  LoadingController,
  AlertController,
} from "ionic-angular";
import { StorangeService } from "../../shared/services";
import { Usuario } from "../../shared";

@IonicPage()
@Component({
  selector: "page-details-user",
  templateUrl: "details-user.html",
})
export class DetailsUserPage {
  file = null;

  autoManufacturers;

  usuario: Usuario = this.storangeService.getLocalUser();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public loadingCtl: LoadingController,
    public storangeService: StorangeService,
    public alertCtrl: AlertController
  ) {}

  atualizaArquivo(event) {
    this.file = event.srcElement.files[0];
    console.log(this.file.name);
  }

  enviarArquivo() {
    const loader = this.presentLoading("Enviado arquivo...");
    if(!this.file){
      loader.dismiss();
      this.alertmsg('Boleto', `Nenhum arquivo selecionado`);
      return;
    }
    setTimeout(() => {
      loader.dismiss();
      this.alertmsg('Boleto', `Boleto ${this.file.name}, enviado com sucesso!`);
    }, 2000);
  }
  // ionViewDidLoad() {}

  presentLoading(msg: string) {
    let loader = this.loadingCtl.create({
      content: msg,
    });
    loader.present();
    return loader;
  }

  alertmsg(title: string, mensagem: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: mensagem,
      buttons: ["OK"],
    });
    alert.present();
  }
}
