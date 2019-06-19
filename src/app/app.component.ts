import { Component } from '@angular/core';

import {Events, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {LocalStorageService} from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  appPages: Array<{title: string, url: string, icon: string}>;
  rootPage: any = '';
  user = {
    phone: '',
    email: '',
    shopName: ''
  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: LocalStorageService,
    public events: Events
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.events.subscribe('user:created', (user, time) => {
          let u = user;
          this.user.phone = u.phone;
          this.user.email = u.email;
          this.user.shopName = u.shopName;
      });
      let us = this.storage.get('login', null);
      if ( us != null ) {
          this.user.phone = us.phone;
          this.user.email = us.email;
          this.user.shopName = us.shopName;
      }
      this.appPages = [
          { title: '开店论坛', url: '\home', icon: 'chatboxes' },
          { title: '手机橱窗', url: '\home', icon: 'create' },
          { title: '邀请有礼', url: '\home', icon: 'git-merge' },
          { title: '资金账户', url: '\home', icon: 'cash' },
          { title: '反馈建议', url: '\home', icon: 'cash' },
          { title: '帮助中心', url: '\home', icon: 'cash' },
      ];
      let userStorage = this.storage.get('user', null);
      if (userStorage == null) {
          let x = [
              {
                  'shopName': 'admin',
                  'phone': 15900000001,
                  'email': '',
                  'accounts': {
                      'phone': 15900000001,
                      'passwordToken': '123456'
                  },
                  'registerDate': ''
              },
              {
                  'shopName': 'teacher',
                  'phone': 15900000002,
                  'email': '',
                  'accounts': {
                      'phone': 15900000002,
                      'passwordToken': '123456'
                  },
                  'registerDate': '',
                  'shortName': '',
                  'owner': '',
                  'shopPhone': '',
                  'businessType': ''
              },
              {
                  'shopName': 'student',
                  'phone': 15900000003,
                  'email': '',
                  'accounts': {
                      'phone': 15900000003,
                      'passwordToken': '123456'
                  },
                  'registerDate': '',
                  'shortName': '',
                  'owner': '',
                  'shopPhone': '',
                  'businessType': ''
              }
          ];
          this.storage.set('user', x);
      }
    });
  }
}
