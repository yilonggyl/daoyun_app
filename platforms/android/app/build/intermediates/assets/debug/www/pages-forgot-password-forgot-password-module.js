(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-password-forgot-password-module"],{

/***/ "./src/app/pages/forgot-password/forgot-password.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/pages/forgot-password/forgot-password.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>返回\n      </ion-button>\n    </ion-buttons>\n    <ion-title>找回密码</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    1、输入邮箱或者手机号>2、输入验证码>3、重置密码\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides  #forgotPasswordSlides>\n    <ion-slide>\n        <form (ngSubmit)=\"onSendPhone()\" #forgotPasswordForm=\"ngForm\" novalidate>\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"fixed\">邮箱/手机</ion-label>\n              <ion-input name=\"forgotPhone\" type=\"text\" required [(ngModel)]=\"user.forgotPhone\"></ion-input>\n            </ion-item>\n            <div padding-horizontal>\n              <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"forgotPasswordForm.invalid\">提交</ion-button>\n            </div>\n          </ion-list>\n        </form>\n    </ion-slide>\n    <ion-slide>\n      <form (ngSubmit)=\"onSendCode()\" #codeForm=\"ngForm\" novalidate>\n        <ion-list>\n          <ion-item>\n            <ion-label position=\"fixed\">验证码</ion-label>\n            <ion-input name=\"code\" type=\"text\" required [(ngModel)]=\"user.code\"></ion-input>\n          </ion-item>\n          <ion-text text-left color=\"danger\" *ngIf=\"codeForm.submitted\">\n            <p [hidden]=\"codeIsRight\" padding-start>您输入的验证码不正确</p>\n          </ion-text>\n          <div padding-horizontal>\n            <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"codeForm.invalid\">提交</ion-button>\n          </div>\n        </ion-list>\n      </form>\n    </ion-slide>\n    <ion-slide>\n      <form (ngSubmit)=\"onSendPwd()\" #pwdForm=\"ngForm\" novalidate>\n        <ion-list>\n          <ion-item>\n            <ion-label position=\"fixed\">用户密码</ion-label>\n            <ion-input name=\"pwd\" type=\"password\" required [(ngModel)]=\"user.pwd\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"fixed\">确认密码</ion-label>\n            <ion-input name=\"cpwd\" type=\"password\" required [(ngModel)]=\"user.cpwd\"></ion-input>\n          </ion-item>\n          <ion-text text-left color=\"danger\" *ngIf=\"pwdForm.submitted\">\n            <p [hidden]=\"pwdIsSame\" padding-start>两次密码不一致</p>\n          </ion-text>\n          <div padding-horizontal>\n            <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"pwdForm.invalid\">提交</ion-button>\n          </div>\n        </ion-list>\n      </form>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
  \***************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_authentication_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication-code.service */ "./src/app/services/authentication-code.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
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






var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(authenticationCodeService, router, userService, toastController, alertController, menuController, location) {
        this.authenticationCodeService = authenticationCodeService;
        this.router = router;
        this.userService = userService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.menuController = menuController;
        this.location = location;
        this.user = {
            forgotPhone: '',
            code: '',
            pwd: '',
            cpwd: ''
        };
        this.codeIsRight = true;
        this.pwdIsSame = true;
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
        this.forgotPasswordSlides.lockSwipeToNext(true);
    };
    ForgotPasswordPage.prototype.ionViewDidEnter = function () {
        this.menuController.enable(false);
    };
    ForgotPasswordPage.prototype.ionViewDidLeave = function () {
        this.menuController.enable(true);
    };
    ForgotPasswordPage.prototype.next = function () {
        this.forgotPasswordSlides.lockSwipeToNext(false);
        this.forgotPasswordSlides.slideNext();
        this.forgotPasswordSlides.lockSwipeToNext(true);
    };
    ForgotPasswordPage.prototype.previous = function () {
        this.forgotPasswordSlides.lockSwipeToNext(false);
        this.forgotPasswordSlides.slidePrev();
        this.forgotPasswordSlides.lockSwipeToNext(true);
    };
    ForgotPasswordPage.prototype.onSendPhone = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userService.check(this.user.forgotPhone)) return [3 /*break*/, 1];
                        this.authenticationCodeService.createCode(4, this.user.forgotPhone);
                        this.next();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.toastController.create({
                            message: '该手机号还未注册',
                            duration: 3000
                        })];
                    case 2:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ForgotPasswordPage.prototype.onSendCode = function () {
        if (this.authenticationCodeService.validate(this.user.code)) {
            this.next();
        }
        else {
            // 验证码错误
            this.codeIsRight = false;
        }
    };
    ForgotPasswordPage.prototype.onSendPwd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.user.pwd === this.user.cpwd)) return [3 /*break*/, 3];
                        if (!this.userService.update(this.user.forgotPhone, this.user.pwd)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertController.create({
                                header: '提示',
                                message: '密码修改成功！',
                                buttons: ['确定']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        alert_1.present();
                        this.router.navigateByUrl('login');
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        this.pwdIsSame = false;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ForgotPasswordPage.prototype.back = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('forgotPasswordSlides'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slides"])
    ], ForgotPasswordPage.prototype, "forgotPasswordSlides", void 0);
    ForgotPasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.page.html */ "./src/app/pages/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/pages/forgot-password/forgot-password.page.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_authentication_code_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationCodeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-forgot-password-forgot-password-module.js.map