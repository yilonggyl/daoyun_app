(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-shop-edit-shop-module"],{

/***/ "./src/app/pages/edit-shop/edit-shop.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/edit-shop/edit-shop.module.ts ***!
  \*****************************************************/
/*! exports provided: EditShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditShopPageModule", function() { return EditShopPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _edit_shop_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-shop.page */ "./src/app/pages/edit-shop/edit-shop.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _edit_shop_page__WEBPACK_IMPORTED_MODULE_5__["EditShopPage"]
    }
];
var EditShopPageModule = /** @class */ (function () {
    function EditShopPageModule() {
    }
    EditShopPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_shop_page__WEBPACK_IMPORTED_MODULE_5__["EditShopPage"]]
        })
    ], EditShopPageModule);
    return EditShopPageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit-shop/edit-shop.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/edit-shop/edit-shop.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>返回\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)=\"save()\" #editShopForm=\"ngForm\" novalidate>\n    <ion-list>\n      <ion-item>\n        <ion-input name=\"{{property}}\" type=\"text\" placeholder=\"{{title}}\" required [(ngModel)]=\"value\">\n        </ion-input>\n      </ion-item>\n      <div padding-horizontal>\n        <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"editShopForm.invalid\">保存</ion-button>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/edit-shop/edit-shop.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/edit-shop/edit-shop.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit-shop/edit-shop.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/edit-shop/edit-shop.page.ts ***!
  \***************************************************/
/*! exports provided: EditShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditShopPage", function() { return EditShopPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditShopPage = /** @class */ (function () {
    function EditShopPage(activatedRoute, localStorageService, router, location) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.localStorageService = localStorageService;
        this.router = router;
        this.location = location;
        activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.property = queryParams.property;
            _this.title = queryParams.title;
        });
    }
    EditShopPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.property = queryParams.property;
            _this.title = queryParams.title;
        });
    };
    EditShopPage.prototype.ngOnInit = function () {
    };
    EditShopPage.prototype.save = function () {
        this.shop = this.localStorageService.get('login', null);
        this.shop[this.property] = this.value;
        this.localStorageService.set('login', this.shop);
        this.value = '';
        this.router.navigateByUrl('shop');
    };
    EditShopPage.prototype.back = function () {
        this.location.back();
    };
    EditShopPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-shop',
            template: __webpack_require__(/*! ./edit-shop.page.html */ "./src/app/pages/edit-shop/edit-shop.page.html"),
            styles: [__webpack_require__(/*! ./edit-shop.page.scss */ "./src/app/pages/edit-shop/edit-shop.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], EditShopPage);
    return EditShopPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-shop-edit-shop-module.js.map