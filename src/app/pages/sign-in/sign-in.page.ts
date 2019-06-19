import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  signInRecord: any;
  constructor(private location: Location, private toastController: ToastController) {
    this.signInRecord = [
        {
            date: '2019-06-01',
            week: '星期六',
            time: '11:11',
            status: '已签到'
        },
        {
            date: '2019-06-01',
            week: '星期六',
            time: '08:21',
            status: '已签到'
        },
        {
            date: '2019-05-25',
            week: '星期六',
            time: '11:59',
            status: '已签到'
        },
        {
            date: '2019-05-25',
            week: '星期六',
            time: '08:20',
            status: '已签到'
        },
        {
            date: '2019-05-11',
            week: '星期六',
            time: '11:14',
            status: '已签到'
        },
        {
            date: '2019-05-11',
            week: '星期六',
            time: '08:20',
            status: '已签到'
        },
    ]
  }

  ngOnInit() {
  }

    async signIn() {
        let toast = await this.toastController.create({
            message: '非签到时间！',
            duration: 2000
        });
        toast.present();
    }

    back() {
        this.location.back();
    }
}
