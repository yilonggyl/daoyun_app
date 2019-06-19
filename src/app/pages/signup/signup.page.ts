import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MenuController, Slides, ToastController} from '@ionic/angular';
import {AuthenticationCodeService} from '../../services/authentication-code.service';
import {Register} from '../../shared/register';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupPage implements OnInit {
  @ViewChild('signupSlides') signupSlides: Slides;
  slideIndex = 0;
  codeIsRight = true;
  sended = false;
  pwdIsSame = true;
  register: Register = {
      phone: '',
      email: '',
      shopName: '',
      password: '',
      confirmPassword: '',
      code: ''
  };
  verifyCode: any = {
    verifyCodeTips: '获取验证码',
    countdown: 60,
    disable: true
  };
  constructor(private authenticationCodeService: AuthenticationCodeService, private userService: UserService,
              private toastController: ToastController, private menuController: MenuController) { }
    // 字符串'signupSlides'和模板中的#signupSlides引用变量的名称一致
    ngOnInit() {
        this.signupSlides.lockSwipeToNext(true);
    }
    ionViewDidEnter() {
        this.menuController.enable(false);
    }
    ionViewDidLeave() {
        this.menuController.enable(true);
    }
    // getActiveIndex()返回的是promise对象，可以使用then或者await两种方法处理
    // onSlideDidChange(event) {
    //     this.signupSlides.getActiveIndex().then((index) => {
    //       this.slideIndex = index;
    //     });
    // }
    next() {
        this.signupSlides.lockSwipeToNext(false);
        this.signupSlides.slideNext();
        this.signupSlides.lockSwipeToNext(true);
    }
    previous() {
        this.signupSlides.lockSwipeToNext(false);
        this.signupSlides.slidePrev();
        this.signupSlides.lockSwipeToNext(true);
    }
    async onSlideDidChange(event) {
        this.slideIndex = await this.signupSlides.getActiveIndex();
    }
    async onSignupPhone() {
      if (!this.userService.check(this.register.phone)) {
          this.next();
      } else {
          let toast = await this.toastController.create({
              message: '该手机号已经注册，请直接登录！',
              duration: 3000
          });
          toast.present();
      }
    }
    // 倒计时
    setTime() {
        if (this.verifyCode.countdown == 1) {
            this.verifyCode.countdown = 60;
            this.verifyCode.verifyCodeTips = '获取验证码';
            this.verifyCode.disable = true;
            return;
        } else {
            this.verifyCode.countdown--;
        }

        this.verifyCode.verifyCodeTips = '重新获取(' + this.verifyCode.countdown + ')';
        setTimeout(() => {
            this.verifyCode.verifyCodeTips = '重新获取(' + this.verifyCode.countdown + ')';
            this.setTime();
        }, 1000);
    }
    onSendSMS() {
      this.sended = true;
      this.authenticationCodeService.createCode(4 , this.register.phone);
      // 发送验证码成功后开始倒计时
      this.verifyCode.disable = false;
      this.setTime();
    }
    onValidateCode() {
      if ( this.authenticationCodeService.validate(this.register.code)) {
          this.codeIsRight = true;
          this.next();
          this.register.code = '';
          this.sended = false;
      } else {
          this.codeIsRight = false;
      }
    }
    onInfoSend() {
      if (this.register.password === this.register.confirmPassword) {
          // 注册成功，保存数据
          this.userService.signup1(this.register);
          this.next();
      } else {
            this.pwdIsSame = false;
      }
    }
}
