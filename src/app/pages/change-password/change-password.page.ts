import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  pwd = {
    old: '',
    new: '',
    cNew: ''
  };
  oldIsRight = true;
  constructor(private localStorageService: LocalStorageService, private userService: UserService,
              private router: Router, private alertController: AlertController, private location: Location) { }

  ngOnInit() {
  }
  async onChangePwd() {
    let login = this.localStorageService.get('login', null);
    if (login.accounts.passwordToken == this.pwd.old) {
      this.userService.update(login.phone, this.pwd.new);
      login.accounts.passwordToken = this.pwd.new;
      this.localStorageService.set('login', login);
      this.router.navigateByUrl('setting');
        let alert =await this.alertController.create({
            header: '提示',
            message: '密码修改成功',
            buttons: ['确定']
        });
        alert.present();
    } else {
        this.oldIsRight = false;
    }
  }
  back() {
    this.location.back();
  }

}
