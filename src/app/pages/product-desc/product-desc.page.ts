import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../shared/product';
import {ProductService} from '../../services/product.service';
import {Location} from '@angular/common';
import {ActionSheetController, AlertController, PopoverController, ToastController} from '@ionic/angular';
import {PopoverComponent} from '../../components/popover/popover.component';
import {UserService} from '../../services/user.service';
import {AppShare} from '../../services/app-share.service';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.page.html',
  styleUrls: ['./product-desc.page.scss'],
})
export class ProductDescPage implements OnInit {
    id: string;
    product: Product;
    isValidate = false;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,
              private router: Router, private location: Location, private popoverController: PopoverController,
              private alertController: AlertController, private userService: UserService,
              private zone: NgZone, private toastController: ToastController,
              private actionSheetController: ActionSheetController, private appShare: AppShare) {
      activatedRoute.queryParams.subscribe(queryParams => {
          this.id = queryParams.id;
          productService.getProductById(this.id).then( (data) => {
              if (data.success == true) {
                  this.product = data.result;
              }
          });
      });
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
      this.isValidate = false;
      this.productService.getProductById(this.id).then( (data) => {
          if (data.success == true) {
              this.product = data.result;
          }
      });
  }
  back() {
      this.location.back();
  }
  async presentPopover(ev) {
      const popover = await this.popoverController.create({
          component: PopoverComponent,
          componentProps: {'id': this.product.id },
          event: ev,
          translucent: true
      });
      return await popover.present();
  }
  async validate() {
      const alert = await this.alertController.create({
          header: '请验证您的身份',
          inputs: [
              {
                  name: 'username',
                  type: 'text',
                  placeholder: '用户名'
              },
              {
                  name: 'password',
                  type: 'password',
                  placeholder: '密码'
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
                  text: '确定',
                  handler: (data) => {
                      if (this.userService.login(data.username, data.password)) {
                          this.zone.run(() => {
                              this.isValidate = true;
                          });
                      } else {
                          this.toastShow();
                      }
                  }
              }
          ]
      });
      await alert.present();
  }
  async toastShow() {
      let toast = await this.toastController.create({
          message: '用户名或者密码错误',
          duration: 3000
      });
      toast.present();
  }
    async onPresentActionSheet() {
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
