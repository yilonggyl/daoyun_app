(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-list-category-list-module"],{

/***/ "./src/app/pages/category-list/category-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/category-list/category-list.module.ts ***!
  \*************************************************************/
/*! exports provided: CategoryListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListPageModule", function() { return CategoryListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _category_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-list.page */ "./src/app/pages/category-list/category-list.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _category_list_page__WEBPACK_IMPORTED_MODULE_5__["CategoryListPage"]
    }
];
var CategoryListPageModule = /** @class */ (function () {
    function CategoryListPageModule() {
    }
    CategoryListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_category_list_page__WEBPACK_IMPORTED_MODULE_5__["CategoryListPage"]]
        })
    ], CategoryListPageModule);
    return CategoryListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/category-list/category-list.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/category-list/category-list.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>商品分类</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"light\" routerLink=\"/addCategory\" [queryParams]=\"{'id': 0, 'name': ''}\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid no-padding>\n    <ion-row no-padding align-items-stretch>\n      <ion-col size=\"5\" no-padding left>\n        <ion-list lines=\"full\" color=\"light\">\n          <ion-item color=\"light\">大分类</ion-item>\n          <ion-item *ngFor=\"let c of categories\" [color]=\"getItemColor(c.id)\" (click)=\"onSelectCategory(c.id)\" [ngClass]=\"{'item-active': c.id===activeCategory.id}\">\n            {{c.name}}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"7\" no-padding>\n        <ion-list lines=\"none\">\n          <ion-item lines=\"full\">小分类</ion-item>\n          <ion-item detail lines=\"full\" (click)=\"onSelectSubCategory(activeCategory)\">无小分类进入大分类</ion-item>\n          <ion-item detail *ngFor=\"let ac of activeCategory.children\" lines=\"full\" (click)=\"onSelectSubCategory(ac)\">\n            {{ac.name}}\n          </ion-item>\n          <ion-item detail=\"false\" routerLink=\"/addCategory\" [queryParams]=\"{'id': activeCategory.id, 'name': activeCategory.name}\">\n            <ion-icon slot=\"start\" name='add-circle' color=\"primary\"></ion-icon>\n            <ion-label color=\"primary\">新增小分类</ion-label>\n          </ion-item>\n        </ion-list>\n        <ion-list class=\"list-footer\" lines=\"none\" no-margin >\n          <ion-item lines=\"full\">\n            <ion-text *ngIf=\"activeCategory.children.length===0\"><h6>目前没有小分类</h6></ion-text>\n            <ion-text *ngIf=\"activeCategory.children.length!==0\">共{{activeCategory.children.length}}种商品分类</ion-text>\n            <ion-button color=\"light\" slot=\"end\" (click)=\"onPresentActionSheet()\">\n              <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/category-list/category-list.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/category-list/category-list.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%;\n  align-items: stretch; }\n  ion-grid ion-row {\n    flex: 1 0 100%;\n    height: 100%; }\n  ion-grid ion-row ion-col[left] {\n      background-color: var(--ion-color-light); }\n  ion-grid .list-footer {\n    position: absolute;\n    bottom: 0px;\n    right: 0px;\n    left: 0px; }\n  ion-grid .item-active {\n    border-left-color: var(--ion-color-primary);\n    border-left-width: 4px;\n    border-left-style: solid; }\n"

/***/ }),

/***/ "./src/app/pages/category-list/category-list.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/category-list/category-list.page.ts ***!
  \***********************************************************/
/*! exports provided: CategoryListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListPage", function() { return CategoryListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var CategoryListPage = /** @class */ (function () {
    function CategoryListPage(categoryService, actionSheetController, router, events, location, ngZone) {
        var _this = this;
        this.categoryService = categoryService;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.events = events;
        this.location = location;
        this.ngZone = ngZone;
        this.count = 0;
        categoryService.getAll().then(function (data) {
            _this.categories = data.result;
            if (_this.categories) {
                _this.activeCategory = _this.categories[0];
            }
        });
    }
    CategoryListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.categoryService.getAll().then(function (data) {
            _this.categories = data.result;
            if (_this.categories) {
                _this.activeCategory = _this.categories[0];
            }
        });
    };
    CategoryListPage.prototype.ngOnInit = function () {
    };
    CategoryListPage.prototype.onPresentActionSheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: '选择您的操作',
                            buttons: [
                                {
                                    text: '新增小分类',
                                    role: 'destructive',
                                    handler: function () {
                                        _this.ngZone.run(function () {
                                            _this.router.navigate(['/addCategory'], { queryParams: { 'id': _this.activeCategory.id, 'name': _this.activeCategory.name } });
                                        });
                                    }
                                }, {
                                    text: '编辑分类',
                                    handler: function () {
                                        _this.ngZone.run(function () {
                                            _this.router.navigate(['/editCategory'], { queryParams: { 'id': _this.activeCategory.id } });
                                        });
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
    CategoryListPage.prototype.getItemColor = function (id) {
        if (id === this.activeCategory.id) {
            return '';
        }
        else {
            return 'light';
        }
    };
    CategoryListPage.prototype.onSelectCategory = function (id) {
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.id === id) {
                this.activeCategory = c;
                break;
            }
        }
    };
    CategoryListPage.prototype.onSelectSubCategory = function (category) {
        this.events.publish('category:selected', category, Date.now());
        this.location.back();
    };
    CategoryListPage.prototype.back = function () {
        this.location.back();
    };
    CategoryListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-list',
            template: __webpack_require__(/*! ./category-list.page.html */ "./src/app/pages/category-list/category-list.page.html"),
            styles: [__webpack_require__(/*! ./category-list.page.scss */ "./src/app/pages/category-list/category-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], CategoryListPage);
    return CategoryListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-category-list-category-list-module.js.map