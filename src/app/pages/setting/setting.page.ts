import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  version: '';
  constructor(private localStorageService: LocalStorageService, private router: Router,
              private alertController: AlertController) { }
  ionViewWillEnter() {
      let appConfig: any = this.localStorageService.get('App', {
          hasRun: false,
          version: '1.0.0'
      });
      this.version = appConfig.version;
  }
  ngOnInit() {
  }
  onLogout() {
    this.localStorageService.remove('login');
    this.router.navigateByUrl('login');
  }
  async checkUpdate() {
    // 判断是否为最新版本
      let alert =await this.alertController.create({
          header: '提示',
          message: '当前为最新版本',
          buttons: ['确定']
      });
      alert.present();
  }
  back() {
      this.router.navigateByUrl('home');
  }
}
