(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-category-edit-category-module"],{

/***/ "./src/app/pages/edit-category/edit-category.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/edit-category/edit-category.module.ts ***!
  \*************************************************************/
/*! exports provided: EditCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryPageModule", function() { return EditCategoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _edit_category_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-category.page */ "./src/app/pages/edit-category/edit-category.page.ts");
/* harmony import */ var _edit_category_name_edit_category_name_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-category-name/edit-category-name.page */ "./src/app/pages/edit-category-name/edit-category-name.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _edit_category_page__WEBPACK_IMPORTED_MODULE_5__["EditCategoryPage"]
    }
];
var EditCategoryPageModule = /** @class */ (function () {
    function EditCategoryPageModule() {
    }
    EditCategoryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _edit_category_page__WEBPACK_IMPORTED_MODULE_5__["EditCategoryPage"],
                _edit_category_name_edit_category_name_page__WEBPACK_IMPORTED_MODULE_6__["EditCategoryNamePage"]
            ],
            entryComponents: [
                _edit_category_name_edit_category_name_page__WEBPACK_IMPORTED_MODULE_6__["EditCategoryNamePage"]
            ]
        })
    ], EditCategoryPageModule);
    return EditCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit-category/edit-category.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/edit-category/edit-category.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>返回\n      </ion-button>\n    </ion-buttons>\n    <ion-title>编辑分类</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-list margin-top>\n    <ion-list-header>\n      <ion-label>大分类</ion-label>\n    </ion-list-header>\n    <ion-item-sliding #itemSliding>\n      <ion-item>\n        <ion-label>{{category.name}}</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"primary\" (click)=\"onEditCategoryName(itemSliding)\">\n          <ion-icon name=\"create\"></ion-icon>编辑\n        </ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"onDelete(itemSliding, category.id)\">\n          <ion-icon name=\"trash\"></ion-icon>删除\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-list-header>\n      <ion-label>小分类</ion-label>\n    </ion-list-header>\n    <ion-item-sliding *ngFor=\"let child of category.children\" #item>\n      <ion-item>\n        <ion-label>{{child.name}}</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"primary\" (click)=\"onEditSubCategoryName(item, child)\">\n          <ion-icon name=\"create\"></ion-icon>编辑\n        </ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"onDelete(item, child.id)\">\n          <ion-icon name=\"trash\"></ion-icon>删除\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/edit-category/edit-category.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/edit-category/edit-category.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit-category/edit-category.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-category/edit-category.page.ts ***!
  \***********************************************************/
/*! exports provided: EditCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryPage", function() { return EditCategoryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _edit_category_name_edit_category_name_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-category-name/edit-category-name.page */ "./src/app/pages/edit-category-name/edit-category-name.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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






var EditCategoryPage = /** @class */ (function () {
    function EditCategoryPage(activatedRoute, categoryService, modalController, alertController, router, location, ngZone) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.categoryService = categoryService;
        this.modalController = modalController;
        this.alertController = alertController;
        this.router = router;
        this.location = location;
        this.ngZone = ngZone;
        activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.id = queryParams.id;
        });
        this.categoryService.get(this.id).then(function (data) {
            if (data.success) {
                _this.category = data.result;
            }
        });
    }
    EditCategoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.categoryService.get(this.id).then(function (data) {
            if (data.success) {
                _this.category = data.result;
            }
        });
    };
    EditCategoryPage.prototype.ngOnInit = function () {
    };
    EditCategoryPage.prototype.presentModal = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_category_name_edit_category_name_page__WEBPACK_IMPORTED_MODULE_4__["EditCategoryNamePage"],
                            componentProps: { value: name }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, modal.onWillDismiss()];
                }
            });
        });
    };
    EditCategoryPage.prototype.onEditCategoryName = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item.close();
                        return [4 /*yield*/, this.presentModal(this.category.name)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data) {
                            this.category.name = data;
                            this.categoryService.update(this.category);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCategoryPage.prototype.onEditSubCategoryName = function (item, subCategory) {
        return __awaiter(this, void 0, void 0, function () {
            var data, id, _i, _a, c;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        item.close();
                        return [4 /*yield*/, this.presentModal(subCategory.name)];
                    case 1:
                        data = (_b.sent()).data;
                        if (data) {
                            id = subCategory.id;
                            for (_i = 0, _a = this.category.children; _i < _a.length; _i++) {
                                c = _a[_i];
                                if (c.id == id) {
                                    c.name = data;
                                    this.categoryService.update(this.category);
                                    break;
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCategoryPage.prototype.onDelete = function (item, subId) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item.close();
                        return [4 /*yield*/, this.alertController.create({
                                header: '你确认要删除吗!',
                                message: '请先删除该类别下的所有商品记录',
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
                                            if (_this.categoryService.delete(subId)) {
                                                // 删除成功
                                                _this.ngZone.run(function () {
                                                    _this.router.navigateByUrl('categoryList');
                                                });
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
    EditCategoryPage.prototype.back = function () {
        this.location.back();
    };
    EditCategoryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-category',
            template: __webpack_require__(/*! ./edit-category.page.html */ "./src/app/pages/edit-category/edit-category.page.html"),
            styles: [__webpack_require__(/*! ./edit-category.page.scss */ "./src/app/pages/edit-category/edit-category.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], EditCategoryPage);
    return EditCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-category-edit-category-module.js.map