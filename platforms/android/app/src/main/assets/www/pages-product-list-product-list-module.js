(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-list-product-list-module"],{

/***/ "./src/app/pages/product-list/product-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-list/product-list.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _product_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list.page */ "./src/app/pages/product-list/product-list.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _product_list_page__WEBPACK_IMPORTED_MODULE_5__["ProductListPage"]
    }
];
var ProductListPageModule = /** @class */ (function () {
    function ProductListPageModule() {
    }
    ProductListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_list_page__WEBPACK_IMPORTED_MODULE_5__["ProductListPage"]]
        })
    ], ProductListPageModule);
    return ProductListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/product-list/product-list.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-list/product-list.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>商品列表</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-toolbar color=\"light\">\n    <ion-searchbar placeholder=\"请输入商品名称、拼音、数字\"\n                   [(ngModel)]=\"queryTerm\"\n                   showCancelButton=\"false\"\n                   (ionInput)=\"onInput($event)\" >\n    </ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"outline\" color=\"primary\" size=\"small\">商品盘点</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"onRefresh($event)\">\n    <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"下拉可以刷新\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"正在加载...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-grid *ngIf=\"totalCount == 0\">\n    <img src=\"assets/img/commodity_no.png\" alt=\"\">\n    <ion-item lines=\"none\"><ion-text color=\"medium\">您还没有任何商品信息</ion-text></ion-item>\n    <ion-item lines=\"none\"><ion-text color=\"medium\">您可以</ion-text></ion-item>\n    <ion-button type=\"button\" expand=\"full\" color=\"primary\" href=\"/addProduct\">新增商品</ion-button>\n  </ion-grid>\n  <ion-grid *ngIf=\"totalCount > 0\" color=\"light\" no-padding>\n    <ion-item>\n      <ion-text>总正库存 {{stock}} 件，总成本 {{price | number:'1.2-2'}} 元</ion-text>\n    </ion-item>\n    <ion-item *ngFor=\"let p of product\" no-padding routerLink=\"/productDesc\" [queryParams]=\"{id: p.id}\">\n      <ion-col size=\"2\">\n        <img src=\"assets/img/c_goodspicture.png\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-row>{{p.name}}</ion-row>\n        <ion-row><ion-text color=\"danger\">￥{{p.price | number:'1.2-2'}}</ion-text></ion-row>\n        <ion-row>\n          <ion-text color=\"medium\">条码:{{p.barcode}}</ion-text>\n          <ion-text padding-start=\"5px\" color=\"medium\">库存:{{p.stock}}</ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"1\">\n            <ion-icon name=\"share\"></ion-icon>\n      </ion-col>\n    </ion-item>\n  </ion-grid>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"onInfinite($event)\">\n    <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"加载更多商品数据...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/product-list/product-list.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-list/product-list.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/product-list/product-list.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/product-list/product-list.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPage", function() { return ProductListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ProductListPage = /** @class */ (function () {
    function ProductListPage(loadingController, productService, zone, alertController, location, router) {
        this.loadingController = loadingController;
        this.productService = productService;
        this.zone = zone;
        this.alertController = alertController;
        this.location = location;
        this.router = router;
        this.currentIndex = 1;
        this.totalCount = 0;
        this.queryTerm = '';
        this.stock = 0;
        this.price = 0;
    }
    ProductListPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ProductListPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, ajaxResult, _i, _a, x, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: '正在加载数据，请稍候...',
                            spinner: 'bubbles',
                        })];
                    case 1:
                        loading = _b.sent();
                        loading.present();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        this.stock = 0;
                        this.price = 0;
                        return [4 /*yield*/, this.productService.getList(this.currentIndex, 10)];
                    case 3:
                        ajaxResult = _b.sent();
                        this.totalCount = ajaxResult.result.totalCount;
                        this.product = ajaxResult.result.product;
                        for (_i = 0, _a = this.product; _i < _a.length; _i++) {
                            x = _a[_i];
                            this.price += +x.price;
                            this.stock += +x.stock;
                        }
                        loading.dismiss();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProductListPage.prototype.onInput = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var ajaxResult_1, error_2, ajaxResult, _i, _a, x, error_3;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.currentIndex = 1;
                        if (!(e.target.value == '')) return [3 /*break*/, 5];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        this.stock = 0;
                        this.price = 0;
                        return [4 /*yield*/, this.productService.getList(this.currentIndex, 10)];
                    case 2:
                        ajaxResult_1 = _b.sent();
                        this.zone.run(function () {
                            _this.totalCount = ajaxResult_1.result.totalCount;
                            _this.product = ajaxResult_1.result.product;
                            for (var _i = 0, _a = _this.product; _i < _a.length; _i++) {
                                var x = _a[_i];
                                _this.price += +x.price;
                                _this.stock += +x.stock;
                            }
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 8];
                    case 5:
                        _b.trys.push([5, 7, , 8]);
                        this.stock = 0;
                        this.price = 0;
                        return [4 /*yield*/, this.productService.getListByCategoryId(this.currentIndex, 10, e.target.value)];
                    case 6:
                        ajaxResult = _b.sent();
                        this.totalCount = ajaxResult.result.totalCount;
                        this.product = ajaxResult.result.product;
                        for (_i = 0, _a = this.product; _i < _a.length; _i++) {
                            x = _a[_i];
                            this.price += +x.price;
                            this.stock += +x.stock;
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        error_3 = _b.sent();
                        console.log(error_3);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ProductListPage.prototype.onRefresh = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var refresher, ajaxResult, _i, _a, x, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.currentIndex = 1;
                        refresher = e.target;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        this.stock = 0;
                        this.price = 0;
                        return [4 /*yield*/, this.productService.getList(this.currentIndex, 10)];
                    case 2:
                        ajaxResult = _b.sent();
                        this.totalCount = ajaxResult.result.totalCount;
                        this.product = ajaxResult.result.product;
                        for (_i = 0, _a = this.product; _i < _a.length; _i++) {
                            x = _a[_i];
                            this.price += +x.price;
                            this.stock += +x.stock;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _b.sent();
                        console.log(error_4);
                        return [3 /*break*/, 4];
                    case 4:
                        refresher.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductListPage.prototype.onInfinite = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var infiniteScroll, ajaxResult, alert_1, _i, _a, x;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        infiniteScroll = e.target;
                        this.currentIndex++;
                        return [4 /*yield*/, this.productService.getList(this.currentIndex, 10)];
                    case 1:
                        ajaxResult = _b.sent();
                        console.log();
                        if (!(ajaxResult.result.totalCount - (this.currentIndex - 1) * 10 < 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: '提示',
                                message: '已经是最后一页',
                                buttons: ['确定']
                            })];
                    case 2:
                        alert_1 = _b.sent();
                        alert_1.present();
                        return [3 /*break*/, 4];
                    case 3:
                        this.stock = 0;
                        this.price = 0;
                        this.totalCount = ajaxResult.result.totalCount;
                        this.product = ajaxResult.result.product;
                        for (_i = 0, _a = this.product; _i < _a.length; _i++) {
                            x = _a[_i];
                            this.price += +x.price;
                            this.stock += +x.stock;
                        }
                        _b.label = 4;
                    case 4:
                        infiniteScroll.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductListPage.prototype.back = function () {
        this.router.navigateByUrl('home');
    };
    ProductListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.page.html */ "./src/app/pages/product-list/product-list.page.html"),
            styles: [__webpack_require__(/*! ./product-list.page.scss */ "./src/app/pages/product-list/product-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductListPage);
    return ProductListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-product-list-product-list-module.js.map