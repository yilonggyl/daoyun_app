import {Component, NgZone, OnInit} from '@angular/core';
import {AlertController, LoadingController} from '@ionic/angular';
import {AjaxResult} from '../../shared/ajax-result';
import {ProductService} from '../../services/product.service';
import {Product} from '../../shared/product';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  currentIndex = 1;
  totalCount = 0;
  product: Array<Product>;
  queryTerm = '';
  stock = 0;
  price = 0;
  constructor(private loadingController: LoadingController, private productService: ProductService,
              private zone: NgZone, private alertController: AlertController, private location: Location,
              private router: Router) { }

  async ngOnInit() {
  }
  async ionViewWillEnter() {
      const loading = await this.loadingController.create({
          message: '正在加载数据，请稍候...',
          spinner: 'bubbles',
      });
      loading.present();
      try {
          this.stock = 0;
          this.price = 0;
          const ajaxResult: AjaxResult = await this.productService.getList(this.currentIndex, 10);
          this.totalCount = ajaxResult.result.totalCount;
          this.product = ajaxResult.result.product;
          for (let x of this.product) {
              this.price += +x.price;
              this.stock += +x.stock;
          }
          loading.dismiss();
      } catch (error) {
          console.log(error);
      }
  }
  async onInput(e) {
      this.currentIndex = 1;
      if (e.target.value == '') {
          try {
              this.stock = 0;
              this.price = 0;
              const ajaxResult: AjaxResult = await this.productService.getList(this.currentIndex, 10);
              this.zone.run(() => {
                  this.totalCount = ajaxResult.result.totalCount;
                  this.product = ajaxResult.result.product;
                  for (let x of this.product) {
                      this.price += +x.price;
                      this.stock += +x.stock;
                  }
              });
          } catch (error) {
              console.log(error);
          }
      } else {
          try {
              this.stock = 0;
              this.price = 0;
              const ajaxResult: AjaxResult = await this.productService.getListByCategoryId(this.currentIndex, 10, e.target.value);
              this.totalCount = ajaxResult.result.totalCount;
              this.product = ajaxResult.result.product;
              for (let x of this.product) {
                  this.price += +x.price;
                  this.stock += +x.stock;
              }
          } catch (error) {
              console.log(error);
          }
      }
  }
  async onRefresh(e) {
      this.currentIndex = 1;
      let refresher = e.target;
      try {
          this.stock = 0;
          this.price = 0;
          const ajaxResult: AjaxResult = await this.productService.getList(this.currentIndex, 10);
          this.totalCount = ajaxResult.result.totalCount;
          this.product = ajaxResult.result.product;
          for (let x of this.product) {
              this.price += +x.price;
              this.stock += +x.stock;
          }
      } catch (error) {
          console.log(error);
      }
      refresher.complete();
  }
  async onInfinite(e) {
      let infiniteScroll = e.target;
      this.currentIndex++;
      const ajaxResult: AjaxResult = await this.productService.getList(this.currentIndex, 10);
      console.log();
      if (ajaxResult.result.totalCount - (this.currentIndex - 1) * 10 < 0) {
          let alert = await this.alertController.create({
              header: '提示',
              message: '已经是最后一页',
              buttons: ['确定']
          });
          alert.present();
      } else {
          this.stock = 0;
          this.price = 0;
          this.totalCount = ajaxResult.result.totalCount;
          this.product = ajaxResult.result.product;
          for (let x of this.product) {
              this.price += +x.price;
              this.stock += +x.stock;
          }
      }
      infiniteScroll.complete();
  }
  back() {
      this.router.navigateByUrl('home');
  }
}
