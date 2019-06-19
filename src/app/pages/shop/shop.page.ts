import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  shop = {
    shopName: '',
    shortName: '',
    registerDate: '',
    phone: '',
    email: '',
    owner: '',
    shopPhone: '',
    businessType: ''
  };
  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
      let login = this.localStorageService.get('login', null);
      if (login != null) {
        this.shop.shopName = login.shopName;
        this.shop.registerDate = login.registerDate;
        this.shop.phone = login.phone;
        this.shop.email = login.email;
        this.shop.shortName = login.shortName;
        this.shop.shopPhone = login.shopPhone;
        this.shop.owner = login.owner;
        this.shop.businessType = login.businessType;
      }
  }
  back() {
    this.router.navigateByUrl('tabs/(setting:setting)');
  }
}
