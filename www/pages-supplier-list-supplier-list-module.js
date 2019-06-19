(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-supplier-list-supplier-list-module"],{

/***/ "./node_modules/angular2-uuid/index.js":
/*!*********************************************!*\
  !*** ./node_modules/angular2-uuid/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UUID = (function () {
    function UUID() {
        // no-op
    }
    UUID.UUID = function () {
        if (typeof (window) !== "undefined" && typeof (window.crypto) !== "undefined" && typeof (window.crypto.getRandomValues) !== "undefined") {
            // If we have a cryptographically secure PRNG, use that
            // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
            var buf = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            return (this.pad4(buf[0]) + this.pad4(buf[1]) + "-" + this.pad4(buf[2]) + "-" + this.pad4(buf[3]) + "-" + this.pad4(buf[4]) + "-" + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
        }
        else {
            // Otherwise, just use Math.random
            // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
            return this.random4() + this.random4() + "-" + this.random4() + "-" + this.random4() + "-" +
                this.random4() + "-" + this.random4() + this.random4() + this.random4();
        }
    };
    UUID.pad4 = function (num) {
        var ret = num.toString(16);
        while (ret.length < 4) {
            ret = "0" + ret;
        }
        return ret;
    };
    UUID.random4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return UUID;
}());
exports.UUID = UUID;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/supplier-list/supplier-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/supplier-list/supplier-list.module.ts ***!
  \*************************************************************/
/*! exports provided: SupplierListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierListPageModule", function() { return SupplierListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _supplier_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supplier-list.page */ "./src/app/pages/supplier-list/supplier-list.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _supplier_list_page__WEBPACK_IMPORTED_MODULE_5__["SupplierListPage"]
    }
];
var SupplierListPageModule = /** @class */ (function () {
    function SupplierListPageModule() {
    }
    SupplierListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_supplier_list_page__WEBPACK_IMPORTED_MODULE_5__["SupplierListPage"]]
        })
    ], SupplierListPageModule);
    return SupplierListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/supplier-list/supplier-list.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/supplier-list/supplier-list.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>供应商列表</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"light\" (click)=\"presentAlertPrompt()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid no-padding>\n    <ion-list lines=\"full\" color=\"light\">\n      <ion-item color=\"light\">请选择供应商</ion-item>\n      <ion-item detail *ngFor=\"let s of supplier\" (click)=\"onSelectSupplier(s)\">\n          <ion-label>{{s.name}}</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/supplier-list/supplier-list.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/supplier-list/supplier-list.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/supplier-list/supplier-list.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/supplier-list/supplier-list.page.ts ***!
  \***********************************************************/
/*! exports provided: SupplierListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierListPage", function() { return SupplierListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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




var SupplierListPage = /** @class */ (function () {
    function SupplierListPage(supplierService, alertController, zone, events, location) {
        this.supplierService = supplierService;
        this.alertController = alertController;
        this.zone = zone;
        this.events = events;
        this.location = location;
        this.initSupplier();
    }
    SupplierListPage.prototype.initSupplier = function () {
        var _this = this;
        this.supplierService.getAll().then(function (data) {
            _this.supplier = data.result;
        });
    };
    SupplierListPage.prototype.ngOnInit = function () {
    };
    SupplierListPage.prototype.presentAlertPrompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '新增供货商',
                            inputs: [
                                {
                                    name: 'name',
                                    type: 'text',
                                    placeholder: '输入供货商名称'
                                },
                                {
                                    name: 'phone',
                                    type: 'number',
                                    placeholder: '输入供货商电话'
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
                                    text: '保存',
                                    handler: function (data) {
                                        var sup = {
                                            id: '',
                                            name: data.name,
                                            phone: data.phone
                                        };
                                        _this.supplierService.insert(sup);
                                        _this.zone.run(function () {
                                            _this.initSupplier();
                                        });
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
    SupplierListPage.prototype.onSelectSupplier = function (supplier) {
        this.events.publish('supplier:selected', supplier, Date.now());
        this.location.back();
    };
    SupplierListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier-list',
            template: __webpack_require__(/*! ./supplier-list.page.html */ "./src/app/pages/supplier-list/supplier-list.page.html"),
            styles: [__webpack_require__(/*! ./supplier-list.page.scss */ "./src/app/pages/supplier-list/supplier-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_supplier_service__WEBPACK_IMPORTED_MODULE_1__["SupplierService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], SupplierListPage);
    return SupplierListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-supplier-list-supplier-list-module.js.map