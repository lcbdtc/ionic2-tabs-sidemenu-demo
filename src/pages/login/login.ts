import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginService} from "./loginService";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginService: LoginService,public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(username, password){
    var params = {
      username: username,
      password: password
    }
    this.loginService.login("/QueryServlet/login.do",params).then(res =>{
      console.log(res)
      if(res.isLogin == 0){
        this.navCtrl.push(TabsPage)
      }else{
        let showAlert = this.alertCtrl.create({
          title:'your password or account may be wrong',
          subTitle:'please try again!',
          buttons:['OK']
        })
        showAlert.present();
      }
    });
  }


}
