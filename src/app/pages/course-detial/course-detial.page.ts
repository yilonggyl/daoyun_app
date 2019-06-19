import {Component, NgZone, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-detial',
  templateUrl: './course-detial.page.html',
  styleUrls: ['./course-detial.page.scss'],
})
export class CourseDetialPage implements OnInit {
    verifyCode: any = {
        verifyCodeTips: '发起签到',
        countdown: 60,
        disable: true
    };
    courseId: string;
  constructor(private location: Location, private activatedRoute: ActivatedRoute) { }

  ionViewWillEnter() {
      this.activatedRoute.queryParams.subscribe(queryParams => {
          this.courseId = queryParams.courseId;
      });
  }

  ngOnInit() {
  }
    back() {
        this.location.back();
    }

    setTime() {
        if (this.verifyCode.countdown == 1) {
            this.verifyCode.countdown = 60;
            this.verifyCode.verifyCodeTips = '发起签到';
            this.verifyCode.disable = true;
            return;
        } else {
            this.verifyCode.countdown--;
        }

        this.verifyCode.verifyCodeTips = '签到结束(' + this.verifyCode.countdown + ')';
        setTimeout(() => {
            this.verifyCode.verifyCodeTips = '签到结束(' + this.verifyCode.countdown + ')';
            this.setTime();
        }, 1000);
    }
    onSend() {
        // 发送验证码成功后开始倒计时
        this.verifyCode.disable = false;
        this.setTime();
    }
}
