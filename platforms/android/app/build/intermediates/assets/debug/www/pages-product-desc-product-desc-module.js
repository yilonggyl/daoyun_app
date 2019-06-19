(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-desc-product-desc-module"],{

/***/ "./src/app/components/popover/popover.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/popover/popover.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list lines=\"full\" no-padding>\n  <ion-item lines=\"full\" (click)=\"editProduct()\">修改商品</ion-item>\n  <ion-item (click)=\"delProduct()\">删除商品</ion-item>\n</ion-list>"

/***/ }),

/***/ "./src/app/components/popover/popover.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/popover/popover.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/popover/popover.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popover/popover.component.ts ***!
  \*********************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(navParams, productService, alertController, router, popoverController, ngZone) {
        this.navParams = navParams;
        this.productService = productService;
        this.alertController = alertController;
        this.router = router;
        this.popoverController = popoverController;
        this.ngZone = ngZone;
        this.id = navParams.data['id'];
    }
    PopoverComponent.prototype.ngOnInit = function () {
    };
    PopoverComponent.prototype.delProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '警告',
                            message: '您确认要删除该产品吗！',
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: '确认',
                                    handler: function () {
                                        if (_this.id && _this.productService.delete(_this.id)) {
                                            // 删除成功
                                            _this.ngZone.run(function () {
                                                _this.router.navigateByUrl('productList');
                                            });
                                        }
                                        _this.popoverController.dismiss();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PopoverComponent.prototype.editProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.popoverController.dismiss();
                this.router.navigate(['/addProduct'], { queryParams: { 'id': this.id } });
                return [2 /*return*/];
            });
        });
    };
    PopoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popover',
            template: __webpack_require__(/*! ./popover.component.html */ "./src/app/components/popover/popover.component.html"),
            styles: [__webpack_require__(/*! ./popover.component.scss */ "./src/app/components/popover/popover.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"], _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], PopoverComponent);
    return PopoverComponent;
}());



/***/ }),

/***/ "./src/app/pages/product-desc/product-desc.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-desc/product-desc.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductDescPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDescPageModule", function() { return ProductDescPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _product_desc_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-desc.page */ "./src/app/pages/product-desc/product-desc.page.ts");
/* harmony import */ var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/popover/popover.component */ "./src/app/components/popover/popover.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _product_desc_page__WEBPACK_IMPORTED_MODULE_5__["ProductDescPage"]
    }
];
var ProductDescPageModule = /** @class */ (function () {
    function ProductDescPageModule() {
    }
    ProductDescPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_desc_page__WEBPACK_IMPORTED_MODULE_5__["ProductDescPage"], _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_6__["PopoverComponent"]],
            entryComponents: [_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_6__["PopoverComponent"]]
        })
    ], ProductDescPageModule);
    return ProductDescPageModule;
}());



/***/ }),

/***/ "./src/app/pages/product-desc/product-desc.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-desc/product-desc.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>商品列表\n      </ion-button>\n    </ion-buttons>\n    <ion-title>商品详情</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"light\" (click)=\"presentPopover($event)\">\n        <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <form (ngSubmit)=\"onSave()\" #productForm=\"ngForm\" style=\"width: 100%;\">\n    <ion-list lines=\"full\">\n      <ion-item>\n        <ion-thumbnail style=\"margin: 10px 10px;\" *ngFor=\"let c of product.images\">\n          <img src=\"{{c}}\" />\n        </ion-thumbnail>\n        <ion-thumbnail slot=\"start\" style=\"margin: 10px 0;\">\n          <img src=\"assets/img/supplier_icon.png\">\n        </ion-thumbnail>\n      </ion-item>\n      <ion-item>\n        <ion-text style=\"margin: 10px 30px 10px 10px;width: 50px;\">名称</ion-text>\n        <ion-note slot=\"end\">{{product.name}}</ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-text style=\"margin: 10px 30px 10px 10px;width: 50px;\">分类</ion-text>\n        <ion-note slot=\"end\">{{product.categoryName}}</ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-text style=\"margin: 10px 30px 10px 10px;width: 50px;\">条码</ion-text>\n        <ion-note slot=\"end\">{{product.barcode}}</ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-text style=\"margin: 10px 30px 10px 10px;width: 50px;\">进价</ion-text>\n        <ion-buttons slot=\"end\" (click)=\"validate()\">\n          <ion-button fill=\"outline\" color=\"primary\" size=\"small\" *ngIf=\"!isValidate\">查看进价</ion-button>\n          <ion-note slot=\"end\" *ngIf=\"isValidate\">￥{{product.bid | number:'1.2-2'}}</ion-note>\n        </ion-buttons>\n      </ion-item>\n      <ion-item>\n        <ion-text style=\"margin: 10px 30px 10px 10px;width: 50px;\">售价</ion-text>\n        <ion-note slot=\"end\">￥{{product.price | number:'1.2-2'}}</ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-text style=\"margin: 10px 30px 10px 10px;width: 50px;\">规格</ion-text>\n        <ion-note slot=\"end\">{{product.spec}}</ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-text style=\"margin: 10px 30px 10px 10px;width: 50px;\">库存</ion-text>\n        <ion-note slot=\"end\">{{product.stock}}</ion-note>\n      </ion-item>\n    </ion-list>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" color=\"primary\"  routerLink=\"/inOutStock\" [queryParams]=\"{'id': id}\">出入库</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"full\" fill=\"outline\" color=\"primary\" (click)=\"onPresentActionSheet()\">分享</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/product-desc/product-desc.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-desc/product-desc.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/product-desc/product-desc.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/product-desc/product-desc.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductDescPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDescPage", function() { return ProductDescPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/popover/popover.component */ "./src/app/components/popover/popover.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_app_share_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/app-share.service */ "./src/app/services/app-share.service.ts");
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








var ProductDescPage = /** @class */ (function () {
    function ProductDescPage(activatedRoute, productService, router, location, popoverController, alertController, userService, zone, toastController, actionSheetController, appShare) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.router = router;
        this.location = location;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.userService = userService;
        this.zone = zone;
        this.toastController = toastController;
        this.actionSheetController = actionSheetController;
        this.appShare = appShare;
        this.isValidate = false;
        activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.id = queryParams.id;
            productService.getProductById(_this.id).then(function (data) {
                if (data.success == true) {
                    _this.product = data.result;
                }
            });
        });
    }
    ProductDescPage.prototype.ngOnInit = function () {
    };
    ProductDescPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.isValidate = false;
        this.productService.getProductById(this.id).then(function (data) {
            if (data.success == true) {
                _this.product = data.result;
            }
        });
    };
    ProductDescPage.prototype.back = function () {
        this.location.back();
    };
    ProductDescPage.prototype.presentPopover = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"],
                            componentProps: { 'id': this.product.id },
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductDescPage.prototype.validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: '确定',
                                    handler: function (data) {
                                        if (_this.userService.login(data.username, data.password)) {
                                            _this.zone.run(function () {
                                                _this.isValidate = true;
                                            });
                                        }
                                        else {
                                            _this.toastShow();
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductDescPage.prototype.toastShow = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: '用户名或者密码错误',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductDescPage.prototype.onPresentActionSheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: '分享',
                            buttons: [
                                {
                                    text: '微信好友',
                                    role: 'destructive',
                                    handler: function () {
                                        _this.appShare.wxShare(0);
                                    }
                                }, {
                                    text: '朋友圈',
                                    handler: function () {
                                        _this.appShare.wxShare(1);
                                    }
                                }, {
                                    text: '短信',
                                    handler: function () {
                                        _this.appShare.sendSms();
                                    }
                                }, {
                                    text: 'QQ好友',
                                    handler: function () {
                                        _this.appShare.qqShare();
                                    }
                                }, {
                                    text: '取消',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductDescPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-desc',
            template: __webpack_require__(/*! ./product-desc.page.html */ "./src/app/pages/product-desc/product-desc.page.html"),
            styles: [__webpack_require__(/*! ./product-desc.page.scss */ "./src/app/pages/product-desc/product-desc.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _services_app_share_service__WEBPACK_IMPORTED_MODULE_7__["AppShare"]])
    ], ProductDescPage);
    return ProductDescPage;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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




var UserService = /** @class */ (function () {
    function UserService(localStorageService, events, http) {
        this.localStorageService = localStorageService;
        this.events = events;
        this.http = http;
    }
    UserService.prototype.signup = function (register) {
        return new Promise((function (resolve, reject) {
            // resolve
        }));
    };
    UserService.prototype.signup1 = function (register) {
        return __awaiter(this, void 0, void 0, function () {
            var user, u;
            return __generator(this, function (_a) {
                user = {
                    shopName: register.shopName,
                    phone: register.phone,
                    email: register.email,
                    accounts: { phone: register.phone, passwordToken: register.password },
                    registerDate: new Date().toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, ''),
                    shortName: '',
                    owner: '',
                    shopPhone: '',
                    businessType: ''
                };
                u = this.localStorageService.get('user', []);
                u.push(user);
                this.localStorageService.set('user', u);
                return [2 /*return*/];
            });
        });
    };
    UserService.prototype.login = function (username, password) {
        var url = 'http://114.115.155.218:8080/login/account';
        this.http.post(url, {
            'userName': username,
            'password': password
        }).toPromise().then(function (response) {
            var res = response;
            console.log(res);
        });
        var user = this.localStorageService.get('user', null);
        console.log(user);
        if (user != null) {
            for (var _i = 0, user_1 = user; _i < user_1.length; _i++) {
                var u = user_1[_i];
                if (u.accounts.phone == username && u.accounts.passwordToken == password) {
                    this.localStorageService.set('login', u);
                    this.events.publish('user:created', u, Date.now());
                    return true;
                }
            }
        }
        return false;
    };
    // 修改密码
    UserService.prototype.update = function (phone, password) {
        var user = this.localStorageService.get('user', null);
        if (user != null) {
            for (var _i = 0, user_2 = user; _i < user_2.length; _i++) {
                var u = user_2[_i];
                if (u.phone == phone) {
                    u.accounts.passwordToken = password;
                    break;
                }
            }
            this.localStorageService.set('user', user);
            return true;
        }
        return false;
    };
    // 判断手机号是否已经存在
    UserService.prototype.check = function (phone) {
        var user = this.localStorageService.get('user', null);
        if (user != null) {
            for (var _i = 0, user_3 = user; _i < user_3.length; _i++) {
                var u = user_3[_i];
                if (u.phone == phone) {
                    return true;
                }
            }
        }
        return false;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-product-desc-product-desc-module.js.map