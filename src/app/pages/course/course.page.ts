import {Component, NgZone, OnInit} from '@angular/core';
import {ActionSheetController, AlertController, Events, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Course} from '../../shared/course';
import {LocalStorageService} from '../../services/local-storage.service';
import {AppShare} from '../../services/app-share.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

  course: Array<Course>;
  loginUser: any;
  constructor(private actionSheetController: ActionSheetController, private ngZone: NgZone,
              private router: Router, private alertController: AlertController,
              private localStorage: LocalStorageService, public events: Events,
              private toastController: ToastController, private appShare: AppShare) {
      this.events.subscribe('course:created', (course, time) => {
          this.course = course;
      });
  }

  ngOnInit() {
      this.loginUser = this.localStorage.get('login', null);
      // let x = [
      //     {
      //         name: '数学',
      //         courseId: '001',
      //         desc: '一节普普通通的数学课',
      //         owner: 'teacher',
      //         teacher: '郭乙龙',
      //         maxNum: 30
      //     },
      //     {
      //         name: '语文',
      //         courseId: '002',
      //         desc: '一节普普通通的语文课',
      //         owner: 'student',
      //         teacher: '郭乙龙',
      //         maxNum: 30
      //     }
      // ];
      // this.course = x;
      this.initCourse();
  }

  initCourse() {
      this.course = this.localStorage.get('course', null);
  }

  async onPresentActionSheet() {
      this.loginUser = this.localStorage.get('login', null);
      const actionSheet = await this.actionSheetController.create({
          header: '选择您的操作',
          buttons: [
              {
                  text: '创建班课',
                  role: 'destructive',
                  handler: () => {
                      this.ngZone.run(() => {
                          this.router.navigate(['/addCourse'], {queryParams: {'owner': this.loginUser.shopName}});
                      });
                  }
              }, {
                  text: '通过班课号加入班课',
                  handler: () => {
                      this.presentAlertPrompt();
                  }
              }, {
                  text: '取消',
                  role: 'cancel',
                  handler: () => {
                  }
              }
          ]
      });
      await actionSheet.present();
  }

  async presentAlertPrompt() {
      this.loginUser = this.localStorage.get('login', null);
      const alert = await this.alertController.create({
          header: '通过班课号加入班课',
          inputs: [
              {
                  name: 'courseId',
                  type: 'text',
                  placeholder: '输入班课号'
              }
          ],
          buttons: [
              {
                  text: '取消',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: () => {
                      console.log('Confirm Cancel');
                  }
              }, {
                  text: '保存',
                  handler: (data) => {
                      // todo 加入班课
                      this.ngZone.run(() => {
                          this.addSuccess(data.courseId);
                      });
                  }
              }
          ]
      });
      await alert.present();
  }

  async addSuccess(courseId: string) {
      if (courseId.length == 8) {
          let alert = await this.alertController.create({
              header: '提示',
              message: '加入成功',
              buttons: ['确定']
          });
          alert.present();
      } else {
          let toast = await this.toastController.create({
              message: '请输入正确的班课号！',
              duration: 3000
          });
          toast.present();
      }
      this.initCourse();
  }
    onSelectCourse(courseId: string) {
        this.loginUser = this.localStorage.get('login', null);
        for (let c of this.course) {
            if (c.courseId === courseId && this.loginUser != null) {
                if (this.loginUser.shopName == 'admin' || this.loginUser.shopName == c.owner) {
                    this.router.navigate(['/courseDetial'], {queryParams: { 'courseId': courseId.substring(0, 8)}});
                } else {
                    this.router.navigateByUrl('signIn');
                }
            }
        }
    }
    async onPresentActionSheetShare() {
        const actionSheet = await this.actionSheetController.create({
            header: '分享',
            buttons: [
                {
                    text: '微信好友',
                    role: 'destructive',
                    handler: () => {
                        this.appShare.wxShare(0);
                    }
                }, {
                    text: '朋友圈',
                    handler: () => {
                        this.appShare.wxShare(1);
                    }
                }, {
                    text: '短信',
                    handler: () => {
                        this.appShare.sendSms();
                    }
                }, {
                    text: 'QQ好友',
                    handler: () => {
                        this.appShare.qqShare();
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                    }
                }
            ]
        });
        await actionSheet.present();
    }
}
