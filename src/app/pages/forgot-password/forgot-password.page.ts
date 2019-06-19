import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AlertController, MenuController, Slides, ToastController} from '@ionic/angular';
import {AuthenticationCodeService} from '../../services/authentication-code.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ForgotPasswordPage implements OnInit {
  @ViewChild('forgotPasswordSlides') forgotPasswordSlides: Slides;
  user = {
    forgotPhone: '',
    code: '',
    pwd: '',
    cpwd: ''
  };
  codeIsRight = true;
  pwdIsSame = true;
  constructor(private authenticationCodeService: AuthenticationCodeService, private router: Router,
              private userService: UserService, private toastController: ToastController,
              private alertController: AlertController, private menuController: MenuController,
              private location: Location) { }
  ngOnInit() {
      this.forgotPasswordSlides.lockSwipeToNext(true);
  }
  ionViewDidEnter() {
      this.menuController.enable(false);
  }
  ionViewDidLeave() {
      this.menuController.enable(true)
  }
  next() {
      this.forgotPasswordSlides.lockSwipeToNext(false);
      this.forgotPasswordSlides.slideNext();
      this.forgotPasswordSlides.lockSwipeToNext(true);
  }
  previous() {
      this.forgotPasswordSlides.lockSwipeToNext(false);
      this.forgotPasswordSlides.slidePrev();
      this.forgotPasswordSlides.lockSwipeToNext(true);
  }
  async onSendPhone() {
    if (this.userService.check(this.user.forgotPhone)) {
        this.authenticationCodeService.createCode(4, this.user.forgotPhone);
        this.next();
    } else {
        let toast = await this.toastController.create({
            message: '该手机号还未注册',
            duration: 3000
        });
        toast.present();
    }
  }
  onSendCode() {
    if (this.authenticationCodeService.validate(this.user.code)) {
      this.next();
    } else {
      // 验证码错误
        this.codeIsRight = false;
    }
  }
  async onSendPwd() {
    if (this.user.pwd === this.user.cpwd) {
        // 注册成功，保存数据
        if (this.userService.update(this.user.forgotPhone, this.user.pwd)) {
            let alert =await this.alertController.create({
                header: '提示',
                message: '密码修改成功！',
                buttons: ['确定']
            });
            alert.present();
            this.router.navigateByUrl('login');
        }
    } else {
        this.pwdIsSame = false;
    }
  }
  back() {
      this.location.back();
  }
}
