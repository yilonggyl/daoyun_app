(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-category-add-category-module"],{

/***/ "./src/app/pages/add-category/add-category.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-category/add-category.module.ts ***!
  \***********************************************************/
/*! exports provided: AddCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryPageModule", function() { return AddCategoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _add_category_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-category.page */ "./src/app/pages/add-category/add-category.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_category_page__WEBPACK_IMPORTED_MODULE_5__["AddCategoryPage"]
    }
];
var AddCategoryPageModule = /** @class */ (function () {
    function AddCategoryPageModule() {
    }
    AddCategoryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_category_page__WEBPACK_IMPORTED_MODULE_5__["AddCategoryPage"]]
        })
    ], AddCategoryPageModule);
    return AddCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-category/add-category.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-category/add-category.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>返回\n      </ion-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"id==0\">新增大分类</ion-title>\n    <ion-title *ngIf=\"id!=0\">新增小分类</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)=\"onSave()\" #addCategoryForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n      <ion-item *ngIf=\"id==0\">\n        <ion-label position=\"fixed\">大分类</ion-label>\n        <ion-input name=\"name\" type=\"text\" placeholder=\"商品大分类名称\" [(ngModel)]=\"category.name\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"id!=0\">\n        <ion-text>{{name}}</ion-text>\n      </ion-item>\n      <ion-item *ngFor=\"let c of children\">\n        <ion-label position=\"fixed\">小分类</ion-label>\n        <ion-input name=\"children{{c.id}}\" type=\"text\" placeholder=\"商品小分类名称\" [(ngModel)]=\"c.name\"></ion-input>\n      </ion-item>\n      <ion-item detail=\"false\" (click)=\"onAddSubCategory()\">\n        <ion-icon slot=\"start\" name='add-circle' color=\"primary\"></ion-icon>\n        <ion-label color=\"primary\">新增小分类</ion-label>\n      </ion-item>\n      <div padding-horizontal>\n        <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"addCategoryForm.invalid\">保存</ion-button>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/add-category/add-category.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-category/add-category.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/add-category/add-category.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-category/add-category.page.ts ***!
  \*********************************************************/
/*! exports provided: AddCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryPage", function() { return AddCategoryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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





var AddCategoryPage = /** @class */ (function () {
    function AddCategoryPage(activatedRoute, categoryService, toastController, alertController, router, location) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.categoryService = categoryService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.router = router;
        this.location = location;
        this.children = [];
        this.category = {
            id: 0,
            name: '',
            children: []
        };
        this.increaseId = 1;
        activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.id = queryParams.id;
            _this.name = queryParams.name;
        });
        var newChildren = {
            id: this.increaseId++,
            name: '',
            children: []
        };
        this.children.push(newChildren);
    }
    AddCategoryPage.prototype.ngOnInit = function () {
    };
    AddCategoryPage.prototype.onAddSubCategory = function () {
        var newChildren = {
            id: this.increaseId++,
            name: '',
            children: []
        };
        this.children.push(newChildren);
    };
    AddCategoryPage.prototype.onSave = function () {
        if (this.id == 0) {
            this.onSavaAddCategory();
        }
        else {
            this.onSavaAddSubCategory();
        }
    };
    AddCategoryPage.prototype.onSavaAddCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.category.children = this.children;
                        if (!this.categoryService.insert(this.category)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertController.create({
                                header: '提示',
                                message: '新增成功',
                                buttons: ['确定']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        alert_1.present();
                        this.router.navigateByUrl('categoryList');
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.toastController.create({
                            message: '请注意商品大类或者小类不能重复！',
                            duration: 3000
                        })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AddCategoryPage.prototype.onSavaAddSubCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, alert_2, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.category.children = this.children;
                        this.category.id = this.id;
                        return [4 /*yield*/, this.categoryService.insertSubCategory(this.category)];
                    case 1:
                        data = _a.sent();
                        if (!data.success) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: '提示',
                                message: '新增成功',
                                buttons: ['确定']
                            })];
                    case 2:
                        alert_2 = _a.sent();
                        alert_2.present();
                        this.router.navigateByUrl('categoryList');
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.toastController.create({
                            message: '请注意商品大类或者小类不能重复！',
                            duration: 3000
                        })];
                    case 4:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AddCategoryPage.prototype.back = function () {
        this.location.back();
    };
    AddCategoryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-category',
            template: __webpack_require__(/*! ./add-category.page.html */ "./src/app/pages/add-category/add-category.page.html"),
            styles: [__webpack_require__(/*! ./add-category.page.scss */ "./src/app/pages/add-category/add-category.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AddCategoryPage);
    return AddCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-category-add-category-module.js.map