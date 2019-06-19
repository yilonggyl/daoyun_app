import {LoadingController, Platform} from '@ionic/angular';
import { Injectable } from '@angular/core';

declare const Wechat;
declare const QQSDK;
declare const sms;

@Injectable()
export class AppShare {
    constructor(public loadingCtrl: LoadingController, platform: Platform) {
    }

    async wxShare(scene) {
        let loading = await this.loadingCtrl.create({ showBackdrop: false });
        loading.present();
        try {
            Wechat.share({
                text: `微信分享该班课成功！`,
                scene: scene == 0 ? Wechat.Scene.SESSION : Wechat.Scene.Timeline  // share to Timeline
            }, function () {
                // alert('Success');
            }, function (reason) {
                alert('Failed: ' + reason);
            });
        } catch (error) {
            console.log(error);
        } finally {
            loading.dismiss();
        }
    }

    async qqShare() {
        let loading = await this.loadingCtrl.create({ showBackdrop: false });
        loading.present();
        try {
            let args = {
                client: QQSDK.ClientType.QQ, // QQSDK.ClientType.QQ,QQSDK.ClientType.TIM;
                scene: QQSDK.Scene.QQ, // QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
                url: 'https://www.baidu.com/',
                title: '这是从 点到为止-签到管理系统 分享出来的链接的标题',
                description: '这是从 点到为止-签到管理系统 分享出来的链接的描述',
                image: 'assets/img/androidbanner.png'
            };
            QQSDK.shareNews(function () {
                // alert('shareNews success');
            }, function (failReason) {
                alert(failReason);
            }, args);
        } catch (error) {
            console.log(error);
        } finally {
            loading.dismiss();
        }
    }

    sendSms() {
        let number = '';
        let message = '这是在测试 点到为止-签到管理系统 的短信分享功能！';
        let options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                // intent: '' // send SMS without opening any other app
            }
        };
        let success = function () {
            // alert('Message sent successfully');
        };
        let error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    }
}

