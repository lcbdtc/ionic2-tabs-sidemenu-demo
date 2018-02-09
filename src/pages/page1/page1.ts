import {Component, ViewChild} from '@angular/core';
import {Nav, NavController} from 'ionic-angular';
import {Page2Page} from "../page2/page2";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Page1Page {
  @ViewChild(Nav) nav:Nav;
  homePage: any = HomePage;
  pages: Array<{ title: string, component: any }>

  constructor(public navCtrl: NavController) {
    this.pages = [
      {title:"page1",component:HomePage},
      {title:"page2",component:Page2Page},
    ]
  }

  openPage = (page) => {
    this.nav.setRoot(page.component)
  }
}
