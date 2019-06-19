import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import {HttpClient} from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationCodeService {
    // 用于保存验证码
    private code: string;
    // 存放验证码的过期时间
    private deadline: number;
    sdkappid = '1400158837';
    strMobile = ''; // tel 的 mobile 字段的内容
    strAppKey = '07f3b944dcc914c9ed2a34bb0657a731'; // sdkappid 对应的 appkey，需要业务方高度保密
    strRand = Math.floor(Math.random() * 10000000000); // url 中的 random 字段的值
    strTime: number; // UNIX 时间戳
    constructor(private http: HttpClient) {
        this.code = '';
    }
    // 生成指定长度的随机数字
    createCode(count: number, tel: string): string {
        this.code = '';
        this.strMobile = tel;
        // 10分钟内有效
        this.deadline = Date.now() + 60 * 10 * 1000;
        this.strTime = Math.floor(Date.now() / 1000);
        let strSig = 'appkey=' + this.strAppKey + '&random=' + this.strRand + '&time=' + this.strTime + '&mobile=' + this.strMobile;
        for (let i = 0; i < count; i++) {
            let num = Math.floor(Math.random() * 10);
            this.code += num.toString();
        }
        let url = 'https://yun.tim.qq.com/v5/tlssmssvr/sendsms?sdkappid=' + this.sdkappid + '&random=' + this.strRand;
        let sig = CryptoJS.SHA256(strSig) + '';
        this.http.post(url, {
            'ext': '',
            'extend': '',
            'params': [
                this.code,
                '5'
            ],
            'sig': sig,
            'sign': '考勤管理系统',
            'tel': {
                'mobile': tel,
                'nationcode': '86'
            },
            'time': this.strTime,
            'tpl_id': 222623
        }).toPromise().then(response => {
            let res = response;
            console.log(res);
        });
        console.log(this.code);
        this.code = Md5.hashStr(this.code).toLocaleString();
        return this.code;
    }
    // 验证用户输入的短信验证码是否一致，是否过期
    validate(value: string): boolean {
        let now = Date.now();
        return Md5.hashStr(value).toLocaleString() == this.code && now < this.deadline;
    }
}
