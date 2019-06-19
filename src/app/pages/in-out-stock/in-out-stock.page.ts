import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../shared/product';
import {ProductService} from '../../services/product.service';
import {Location} from '@angular/common';
import {Slides} from '@ionic/angular';

@Component({
  selector: 'app-in-out-stock',
  templateUrl: './in-out-stock.page.html',
  styleUrls: ['./in-out-stock.page.scss'],
})
export class InOutStockPage implements OnInit {
  @ViewChild('inOutSlides') inOutSlides: Slides;
  id: string;
  product: Product;
  nowIndex = 0;
  in: string;
  inNote: string;
  out: string;
  outNote: string;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,
              private location: Location) {
      activatedRoute.queryParams.subscribe(queryParams => {
          this.id = queryParams.id;
      });
      productService.getProductById(this.id).then( (data) => {
          if (data.success == true) {
              this.product = data.result;
              if (this.product.stock == '') {
                  this.product.stock = 0;
              }
          }
      });
  }
  ionViewWillEnter() {
      this.nowIndex = 0;
      this.in = '';
      this.inNote = '';
      this.out = '';
      this.outNote = '';
  }
  ngOnInit() {
    this.inOutSlides.lockSwipeToNext(true);
  }
  back() {
    this.location.back();
  }
  toRight() {
      if (this.nowIndex != 0) {
          this.nowIndex = 0;
          this.inOutSlides.lockSwipeToNext(false);
          this.inOutSlides.slidePrev();
          this.inOutSlides.lockSwipeToNext(true);
      }
  }
  toLeft() {
    if (this.nowIndex != 1) {
      this.nowIndex = 1;
      this.inOutSlides.lockSwipeToNext(false);
      this.inOutSlides.slideNext();
      this.inOutSlides.lockSwipeToNext(true);
    }
  }
  onInStock() {
    this.product.stock += +this.in;
    this.product.note = this.inNote;
    this.productService.update(this.product);
    this.back();
  }
  async onOutStock() {
      this.product.stock -= +this.out;
      this.product.note = this.outNote;
      this.productService.update(this.product);
      this.back();
  }
}
