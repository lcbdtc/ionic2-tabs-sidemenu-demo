
import {LoadingController, ToastController} from "ionic-angular";
import {Injectable} from "@angular/core";
import {Camera} from "@ionic-native/camera";

@Injectable()
export class NativeService{

  private toast;
  private loading;
  constructor(private toastCtrl: ToastController, private loadingCtrl: LoadingController, public camera : Camera){

  }


  /**
   * 显示提示信息
   * @param {string} message
   * @param {number} duration
   */
  showToast = (message:string = '操作完成',duration:number =2500) =>{
    this.toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: 'top',
      showCloseButton: true,
      closeButtonText: '关闭'
    });
  }
  /**
   * 关闭信息提示框
   */
  hideToast = () =>{
    this.toast.dismissAll();
  }


  showLoading = (content : string = "") => {
    this.loading = this.loadingCtrl.create({
      content: content
    });
    this.loading.present();
    setTimeout(() => {
      this.loading.dismiss();
    },2000);
  }

  hideLoading = () => {
    this.loading = this.loading.dismiss();
  }

  /**
   * 使用cordova-plugin-camera获取照片的base64
   * @param options
   * @return {Promise<T>}
   */
  getPicture = (options) => {
    return new Promise((resolve, reject) => {
      this.camera.getPicture(Object.assign({
        sourceType: this.camera.PictureSourceType.CAMERA,//图片来源,CAMERA:拍照,PHOTOLIBRARY:相册
        destinationType: this.camera.DestinationType.DATA_URL,//返回值格式,DATA_URL:base64,FILE_URI:图片路径
        quality: 90,//保存的图像质量，范围为0 - 100
        allowEdit: true,//选择图片前是否允许编辑
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 800,//缩放图像的宽度（像素）
        targetHeight: 800,//缩放图像的高度（像素）
        saveToPhotoAlbum: false,//是否保存到相册
        correctOrientation: true//设置摄像机拍摄的图像是否为正确的方向
      }, options)).then((imageData) => {
        resolve(imageData);
      }, (err) => {
        console.log(err);
        err == 20 ? this.showToast('没有权限,请在设置中开启权限') : reject(err);
      });
    });
  };


  /**
   * 从图库获取图片
   * @param {{}} options
   * @returns {Promise<any>}
   */

  getPictureByPhotoLibary = (options = {}) => {
    return new Promise((resolve => {
      this.getPicture(Object.assign({
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      },options)).then(imageBase64 => {
        resolve(imageBase64);
      }).catch(err => {
        String(err).indexOf('cancel') != -1 ? this.showToast('取消选择图片',1500): this.showToast('获取照片失败');
      })
    }))
  }


  /**
   * 通过拍照获取图片
   * @param {{}} options
   * @returns {Promise<any>}
   */

  getPictureByCamera = (options = {}) => {
    return new Promise((resolve => {
      this.getPicture(Object.assign({
        sourceType: this.camera.PictureSourceType.CAMERA
      },options)).then(imageBase64 => {
        resolve(imageBase64);
      }).catch(err => {
        String(err).indexOf('cancel') != -1 ? this.showToast('取消拍照', 1500) : this.showToast('获取照片失败');
      })
    }))
  }


}
