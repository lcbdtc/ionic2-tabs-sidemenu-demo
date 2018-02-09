import {Component, ViewChild} from '@angular/core';
import {Nav, NavController} from 'ionic-angular';
import {Page2Page} from "../page2/page2";
import {Page1Page} from "../page1/page1";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Nav) nav:Nav;
  homePage: any = Page1Page;
  pages: Array<{ title: string, component: any }>

  constructor(public navCtrl: NavController) {
    this.pages = [
      {title:"page1",component:Page1Page},
      {title:"page2",component:Page2Page},
    ]
  }

  openPage = (page) => {
    this.nav.setRoot(page.component)
  }
}
