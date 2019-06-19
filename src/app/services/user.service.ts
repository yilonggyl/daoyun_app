import { Injectable } from '@angular/core';
import {AjaxResult} from '../shared/ajax-result';
import {Register} from '../shared/register';
import {LocalStorageService} from './local-storage.service';
import {Events} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private localStorageService: LocalStorageService, public events: Events, private http: HttpClient) { }

  signup(register: Register): Promise<AjaxResult> {
    return new Promise(((resolve, reject) => {
      // resolve
    }));
  }
  async signup1(register: Register) {
    let user = {
      shopName: register.shopName,
      phone: register.phone,
      email: register.email,
      accounts: {phone: register.phone, passwordToken: register.password},
      registerDate: new Date().toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, ''),
      shortName: '',
      owner: '',
      shopPhone: '',
      businessType: ''
    };
    let u = this.localStorageService.get('user', []);
    u.push(user);
    this.localStorageService.set('user', u);
  }
  login(username: string, password: string): boolean {
      let url = 'http://114.115.155.218:8080/login/account';
      this.http.post(url, {
          'userName': username,
          'password': password
      }).toPromise().then(response => {
          let res = response;
          console.log(res);
      });
      let user = this.localStorageService.get('user', null);
      console.log(user);
      if (user != null) {
          for (let u of user) {
            if (u.accounts.phone == username && u.accounts.passwordToken == password) {
                this.localStorageService.set('login', u);
                this.events.publish('user:created',u, Date.now());
                return true;
            }
          }
      }
      return false;
  }
  // 修改密码
  update(phone: string, password: string): boolean {
      let user = this.localStorageService.get('user', null);
      if ( user != null ) {
          for (let u of user) {
              if (u.phone == phone) {
                  u.accounts.passwordToken = password;
                  break;
              }
          }
          this.localStorageService.set('user', user);
          return true;
      }
      return false;
  }
  // 判断手机号是否已经存在
  check(phone: string): boolean {
      let user = this.localStorageService.get('user', null);
      if (user != null) {
          for (let u of user) {
              if (u.phone == phone) {
                  return true;
              }
          }
      }
      return false;
  }
}
