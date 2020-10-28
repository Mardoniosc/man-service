import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
} from "ionic-angular";
import { StorangeService } from "../../shared/services";
import { Usuario } from "../../shared";

@IonicPage()
@Component({
  selector: "page-details-user",
  templateUrl: "details-user.html",
})
export class DetailsUserPage {
  usuario: Usuario = this.storangeService.getLocalUser()

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public storangeService: StorangeService
  ) {}

  // ionViewDidLoad() {}

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }
}
