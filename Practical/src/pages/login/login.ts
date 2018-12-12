import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { FindPasswordPage } from '../find-password/find-password';
import{ Http } from '@angular/http';
import { HomePage} from '../home/home';

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

  constructor(public app:App, public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }
  goReg(){
    this.navCtrl.push(RegisterPage);
  }
  goPas(){
    this.navCtrl.push(FindPasswordPage);
  }
  logIn(username: HTMLInputElement, password : HTMLInputElement){
    if (username.value == "" || password.value == "") {
      //this.presentToast("middle", "error", "账户或密码不能为空");
      alert("账户或密码不能为空");
    } 
    else{
      this.http.post('/api/login',{phone:username.value,psw:password.value}).subscribe((data)=>{
        console.log(data);
        var obj = JSON.parse(data['_body']);
        if(obj['code'] == 200){
          console.log(obj['msg']);
          window.localStorage.setItem('username',username.value);
          window.localStorage.setItem('password',password.value);
          this.app.getRootNavs()[0].setRoot(TabsPage);
        }
        else{
          alert(obj['msg']);
        }
      })
    }
    /*else if(username.value == 'test' && password.value == '123123') {
      window.localStorage.setItem('username',username.value);
      window.localStorage.setItem('password',password.value);//保存登录时数据
      this.navCtrl.setRoot(TabsPage);//跳转到登录后的页面
      //this.app.getRootNavs()[0].setRoot(TabsPage);
    }
    // if (username.value == "" || password.value == "") {
    //   this.presentToast("middle", "error", "账户或密码不能为空");
    // } else if((AppConfig.USERNAME==username.value)&&(AppConfig.PASSWORD==password.value) ){
    //   AppConfig.loginState = true;
    //   this.checkRemember(username, password);  //保存用户信息
    //   this.navCtrl.push(GuidePage);
    // }
    else  {
      alert("账户或密码错误！");
 
    }
    */
  }
  presentToast(arg0: string, arg1: string, arg2: string): any {
    throw new Error("Method not implemented.");
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

}
