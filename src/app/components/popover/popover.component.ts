import {Component, NgZone, OnInit} from '@angular/core';
import {AlertController, NavParams, PopoverController} from '@ionic/angular';
import {Product} from '../../shared/product';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  id: string;
  product: Product;
  constructor(private navParams: NavParams, private productService: ProductService,
              private alertController: AlertController, private router: Router,
              private popoverController: PopoverController, private ngZone: NgZone) {
       this.id = navParams.data['id'];
  }

  ngOnInit() {
  }
  async delProduct() {
      let alert = await this.alertController.create({
          header: '警告',
          message: '您确认要删除该产品吗！',
          buttons: [
              {
                  text: '取消',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: (blah) => {
                  }
              }, {
                  text: '确认',
                  handler: () => {
                      if (this.id && this.productService.delete(this.id)) {
                          // 删除成功
                          this.ngZone.run(() => {
                              this.router.navigateByUrl('productList');
                          });
                      }
                      this.popoverController.dismiss();
                  }
              }
          ]
      });
      await alert.present();
  }
  async editProduct() {
      this.popoverController.dismiss();
      this.router.navigate(['/addProduct'], {queryParams: {'id': this.id}});
  }
}
