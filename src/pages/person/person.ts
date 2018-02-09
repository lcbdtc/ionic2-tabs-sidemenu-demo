import { Component } from '@angular/core';
import {ActionSheetController, NavController, ViewController} from 'ionic-angular';
import {NativeService} from "../../providers/NativeService";

@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
})
export class PersonPage {


  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController, public nativeService : NativeService, public viewCtrl : ViewController) {

  }
  isChange: boolean = false;//头像是否改变标识
  avatarPath: any = './assets/imgs/qr_code.jpeg';//用户默认头像
  imageBase64: any;//保存头像base64,用于上传

  items=[{"label":"钱包","icon":"card"},{"label":"收藏","icon":"cart"},{"label":"我的订单","icon":"clipboard"}
    ,{"label":"我的物流信息","icon":"document"}];

  presentActionSheet(){
    let options = {
      targetWidth:400,
      targetHeigth:400
    }
    console.log("enter actionSheet")
    let actionSheet = this.actionSheetCtrl.create({
      buttons:[{
        text:'相册',
        handler: () => {
          this.nativeService.getPictureByPhotoLibary(options).then(imageData => {
            this.getPictureSuccess(imageData);
            if(this.isChange){
              this.nativeService.showLoading("正在上传...")
            }
          },(error) => {
          })
        }
      },{
        text:'拍照',
        handler: () => {
          this.nativeService.getPictureByCamera(options).then(imageData => {
            this.getPictureSuccess(imageData);
            if(this.isChange){
              this.nativeService.showLoading("正在上传...")
            }
          });
        }
      },{
        text:'取消',
        role:'cancel'
      }]
    })
    actionSheet.present();
  }
  private getPictureSuccess(imageBase64) {
    this.isChange = true;
    this.imageBase64 = <string>imageBase64;
    this.avatarPath = 'data:image/jpeg;base64,' + imageBase64;
  }

}
