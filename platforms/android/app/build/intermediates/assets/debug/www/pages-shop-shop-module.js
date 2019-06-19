(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shop-shop-module"],{

/***/ "./src/app/pages/shop/shop.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.module.ts ***!
  \*******************************************/
/*! exports provided: ShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageModule", function() { return ShopPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop.page */ "./src/app/pages/shop/shop.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_5__["ShopPage"]
    }
];
var ShopPageModule = /** @class */ (function () {
    function ShopPageModule() {
    }
    ShopPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_5__["ShopPage"]]
        })
    ], ShopPageModule);
    return ShopPageModule;
}());



/***/ }),

/***/ "./src/app/pages/shop/shop.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>返回\n      </ion-button>\n    </ion-buttons>\n    <ion-title>我的信息</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding color=\"medium\">\n  <ion-list inset=\"true\">\n    <ion-item detail routerLink=\"/editShop\" [queryParams]=\"{title:'我的昵称',property:'shopName'}\">\n      <ion-label>我的昵称</ion-label>\n      <ion-note slot=\"end\">{{shop.shopName}}</ion-note>\n    </ion-item>\n    <ion-item detail routerLink=\"/editShop\" [queryParams]=\"{title:'学校名称',property:'owner'}\">\n      <ion-label>学校名称</ion-label>\n      <ion-note slot=\"end\">{{shop.owner}}</ion-note>\n    </ion-item>\n    <ion-item detail routerLink=\"/editShop\" [queryParams]=\"{title:'专业名称',property:'shortName'}\">\n      <ion-label>专业名称</ion-label>\n      <ion-note slot=\"end\">{{shop.shortName}}</ion-note>\n    </ion-item>\n    <ion-item detail routerLink=\"/editShop\" [queryParams]=\"{title:'电子邮件',property:'email'}\">\n      <ion-label>电子邮件</ion-label>\n      <ion-note slot=\"end\">{{shop.email}}</ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>手机号码</ion-label>\n      <ion-note slot=\"end\">{{shop.phone}}</ion-note>\n    </ion-item>\n    <!--<ion-item>-->\n      <!--<ion-label>注册时间</ion-label>-->\n      <!--<ion-note slot=\"end\">{{shop.registerDate | date: \"yyyy/MM/dd hh:mm\"}}</ion-note>-->\n    <!--</ion-item>-->\n  </ion-list>\n  <!--<ion-list inset=\"true\">-->\n    <!--<ion-item detail routerLink=\"/editShop\" [queryParams]=\"{title:'店铺电话',property:'shopPhone'}\">-->\n      <!--<ion-label>店铺电话</ion-label>-->\n      <!--<ion-note slot=\"end\">{{shop.shopPhone}}</ion-note>-->\n    <!--</ion-item>-->\n    <!--<ion-item detail routerLink=\"/editShop\" [queryParams]=\"{title:'行业类型',property:'businessType'}\">-->\n      <!--<ion-label>行业类型</ion-label>-->\n      <!--<ion-note slot=\"end\">{{shop.businessType}}</ion-note>-->\n    <!--</ion-item>-->\n  <!--</ion-list>-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/shop/shop.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/shop/shop.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/shop/shop.page.ts ***!
  \*****************************************/
/*! exports provided: ShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPage", function() { return ShopPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopPage = /** @class */ (function () {
    function ShopPage(localStorageService, router) {
        this.localStorageService = localStorageService;
        this.router = router;
        this.shop = {
            shopName: '',
            shortName: '',
            registerDate: '',
            phone: '',
            email: '',
            owner: '',
            shopPhone: '',
            businessType: ''
        };
    }
    ShopPage.prototype.ngOnInit = function () {
    };
    ShopPage.prototype.ionViewWillEnter = function () {
        var login = this.localStorageService.get('login', null);
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
    };
    ShopPage.prototype.back = function () {
        this.router.navigateByUrl('tabs/(setting:setting)');
    };
    ShopPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.page.html */ "./src/app/pages/shop/shop.page.html"),
            styles: [__webpack_require__(/*! ./shop.page.scss */ "./src/app/pages/shop/shop.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShopPage);
    return ShopPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-shop-shop-module.js.map