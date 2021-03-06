import { Component } from '@angular/core';
import { Platform ,ToastController, App, NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  backButtonPressed = false;
  showExit(): void {
    //如果为true，退出
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
        //第一次按，弹出Toast
        this.toastCtrl.create({
            message: '再按一次退出应用',
            duration: 2000,
            position: 'top'
        }).present();
      //标记为true
      this.backButtonPressed = true;
      //两秒后标记为false，如果退出的话，就不会执行了
      setTimeout(() => this.backButtonPressed = false, 2000);
    }
  }
  constructor(public appCtrl: App,
    public toastCtrl: ToastController,private platform: Platform, private statusBar: StatusBar, splashScreen: SplashScreen) {
      if(window.localStorage.getItem('username')) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = LoginPage;
      }
      platform.ready().then(() => {
      statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#f00');
      splashScreen.hide();
      
      this.platform.registerBackButtonAction(() => {
        //获取NavController
        let activeNav: NavController = this.appCtrl.getActiveNavs()[0];
        //如果可以返回上一页，则执行pop
        if (activeNav.canGoBack()) {
          activeNav.pop();
        } else {
            this.showExit();
        }
      });
  
    });
  }
}
