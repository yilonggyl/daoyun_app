(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-in-out-stock-in-out-stock-module"],{

/***/ "./src/app/pages/in-out-stock/in-out-stock.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/in-out-stock/in-out-stock.module.ts ***!
  \***********************************************************/
/*! exports provided: InOutStockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InOutStockPageModule", function() { return InOutStockPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _in_out_stock_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./in-out-stock.page */ "./src/app/pages/in-out-stock/in-out-stock.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _in_out_stock_page__WEBPACK_IMPORTED_MODULE_5__["InOutStockPage"]
    }
];
var InOutStockPageModule = /** @class */ (function () {
    function InOutStockPageModule() {
    }
    InOutStockPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_in_out_stock_page__WEBPACK_IMPORTED_MODULE_5__["InOutStockPage"]]
        })
    ], InOutStockPageModule);
    return InOutStockPageModule;
}());



/***/ }),

/***/ "./src/app/pages/in-out-stock/in-out-stock.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/in-out-stock/in-out-stock.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>返回\n      </ion-button>\n    </ion-buttons>\n    <ion-title>修改库存</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div style=\"margin: 15px 15px 30px 15px;\">\n    <ion-row>\n      <ion-col style=\"padding: 0;\">\n        <ion-button expand=\"full\" color=\"primary\" fill=\"outline\" (click)=\"toRight()\" style=\"border-left:solid 1px;\" *ngIf=\"nowIndex != 0\">入库</ion-button>\n        <ion-button expand=\"full\" color=\"primary\" (click)=\"toRight()\" *ngIf=\"nowIndex == 0\">入库</ion-button>\n      </ion-col>\n      <ion-col style=\"padding: 0;\">\n        <ion-button expand=\"full\" color=\"primary\" fill=\"outline\" (click)=\"toLeft()\" style=\"border-right:solid 1px;\" *ngIf=\"nowIndex == 0\">出库</ion-button>\n        <ion-button expand=\"full\" color=\"primary\"(click)=\"toLeft()\" *ngIf=\"nowIndex != 0\">出库</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-slides #inOutSlides>\n    <ion-slide>\n      <form (ngSubmit)=\"onInStock()\" #inStockForm=\"ngForm\" style=\"width: 100%;\">\n        <ion-list padding-right no-margin>\n          <ion-item>\n            <ion-label position=\"fixed\">入库数量</ion-label>\n            <ion-input name=\"stock\" type=\"text\" [(ngModel)]=\"in\" required></ion-input>\n          </ion-item>\n          <ion-item margin-top>\n            <ion-label position=\"fixed\">备注</ion-label>\n            <ion-input name=\"note\" type=\"text\" [(ngModel)]=\"inNote\"></ion-input>\n          </ion-item>\n          <ion-item lines=\"none\"></ion-item>\n          <ion-item lines=\"none\">\n            <ion-note slot=\"end\">当前库存：{{product.stock}}件</ion-note>\n          </ion-item>\n          <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"inStockForm.invalid\">确认入库</ion-button>\n        </ion-list>\n      </form>\n    </ion-slide>\n    <ion-slide>\n      <form (ngSubmit)=\"onOutStock()\" #outStockForm=\"ngForm\" style=\"width: 100%;\">\n        <ion-list padding-right no-margin>\n          <ion-item>\n            <ion-label position=\"fixed\">出库数量</ion-label>\n            <ion-input name=\"stock\" type=\"text\" [(ngModel)]=\"out\" required  #stock=\"ngModel\"></ion-input>\n          </ion-item>\n          <ion-item margin-top>\n            <ion-label position=\"fixed\">备注</ion-label>\n            <ion-input name=\"note\" type=\"text\" [(ngModel)]=\"inNote\"></ion-input>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-text text-left color=\"danger\" *ngIf=\"(out > product.stock)\">\n              <p padding-start>出库数量不能大于库存！</p>\n            </ion-text>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-note slot=\"end\">当前库存：{{product.stock}}件</ion-note>\n          </ion-item>\n          <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"outStockForm.invalid || out > product.stock\">确认出库</ion-button>\n        </ion-list>\n      </form>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/in-out-stock/in-out-stock.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/in-out-stock/in-out-stock.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/in-out-stock/in-out-stock.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/in-out-stock/in-out-stock.page.ts ***!
  \*********************************************************/
/*! exports provided: InOutStockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InOutStockPage", function() { return InOutStockPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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





var InOutStockPage = /** @class */ (function () {
    function InOutStockPage(activatedRoute, productService, location) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.location = location;
        this.nowIndex = 0;
        activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.id = queryParams.id;
        });
        productService.getProductById(this.id).then(function (data) {
            if (data.success == true) {
                _this.product = data.result;
                if (_this.product.stock == '') {
                    _this.product.stock = 0;
                }
            }
        });
    }
    InOutStockPage.prototype.ionViewWillEnter = function () {
        this.nowIndex = 0;
        this.in = '';
        this.inNote = '';
        this.out = '';
        this.outNote = '';
    };
    InOutStockPage.prototype.ngOnInit = function () {
        this.inOutSlides.lockSwipeToNext(true);
    };
    InOutStockPage.prototype.back = function () {
        this.location.back();
    };
    InOutStockPage.prototype.toRight = function () {
        if (this.nowIndex != 0) {
            this.nowIndex = 0;
            this.inOutSlides.lockSwipeToNext(false);
            this.inOutSlides.slidePrev();
            this.inOutSlides.lockSwipeToNext(true);
        }
    };
    InOutStockPage.prototype.toLeft = function () {
        if (this.nowIndex != 1) {
            this.nowIndex = 1;
            this.inOutSlides.lockSwipeToNext(false);
            this.inOutSlides.slideNext();
            this.inOutSlides.lockSwipeToNext(true);
        }
    };
    InOutStockPage.prototype.onInStock = function () {
        this.product.stock += +this.in;
        this.product.note = this.inNote;
        this.productService.update(this.product);
        this.back();
    };
    InOutStockPage.prototype.onOutStock = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.product.stock -= +this.out;
                this.product.note = this.outNote;
                this.productService.update(this.product);
                this.back();
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inOutSlides'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Slides"])
    ], InOutStockPage.prototype, "inOutSlides", void 0);
    InOutStockPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-in-out-stock',
            template: __webpack_require__(/*! ./in-out-stock.page.html */ "./src/app/pages/in-out-stock/in-out-stock.page.html"),
            styles: [__webpack_require__(/*! ./in-out-stock.page.scss */ "./src/app/pages/in-out-stock/in-out-stock.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], InOutStockPage);
    return InOutStockPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-in-out-stock-in-out-stock-module.js.map