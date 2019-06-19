(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");
/* harmony import */ var _components_czb_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/czb.module */ "./src/app/components/czb.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_czb_module__WEBPACK_IMPORTED_MODULE_6__["CzbModule"]
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>注册</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div text-center style=\"padding-top: 20px;\">\n    <img class=\"logo\" src=\"assets/img/logo_1.png\" alt=\"\">\n  </div>\n  <div>\n    <ion-grid margin-top>\n      <ion-row>\n        <ion-col>\n          <img src=\"assets/img/registered_one.png\" alt=\"\" *ngIf=\"slideIndex!==0\">\n          <img src=\"assets/img/registered_one_one.png\" alt=\"\" *ngIf=\"slideIndex===0\">\n        </ion-col>\n        <ion-col align-self-center>\n          <hr class=\"line\">\n        </ion-col>\n        <ion-col>\n          <img src=\"assets/img/registered_two.png\" alt=\"\" *ngIf=\"slideIndex!==1\">\n          <img src=\"assets/img/registered_two_two.png\" alt=\"\" *ngIf=\"slideIndex===1\">\n        </ion-col>\n        <ion-col align-self-center>\n          <hr class=\"line\">\n        </ion-col>\n        <ion-col>\n          <img src=\"assets/img/registered_three.png\" alt=\"\" *ngIf=\"slideIndex!==2\">\n          <img src=\"assets/img/registered_three_three.png\" alt=\"\" *ngIf=\"slideIndex===2\">\n        </ion-col>\n        <ion-col align-self-center>\n          <hr class=\"line\">\n        </ion-col>\n        <ion-col>\n          <img src=\"assets/img/register_four.png\" alt=\"\" *ngIf=\"slideIndex!==3\">\n          <img src=\"assets/img/register_four_four.png\" alt=\"\" *ngIf=\"slideIndex===3\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-slides  #signupSlides (ionSlideDidChange)=\"onSlideDidChange()\" style=\"padding: 0;\">\n    <ion-slide>\n        <form (ngSubmit)=\"onSignupPhone()\" #registerForm=\"ngForm\" style=\"width: 100%;\">\n          <ion-list>\n            <ion-item>\n              <ion-input name=\"phone\" type=\"number\" placeholder=\"请输入您的手机号码\" required\n                         pattern=\"^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-3,5-9])|(19[8-9]))\\d{8}$\" [(ngModel)]=\"register.phone\" #phone=\"ngModel\">\n              </ion-input>\n            </ion-item>\n              <ion-text text-left color=\"danger\" *ngIf=\"(phone.invalid && phone.touched)\">\n                <p [hidden]=\"!phone.errors?.required\" padding-start>请输入手机号码</p>\n                <p [hidden]=\"!phone.errors?.pattern\" padding-start>您输入的手机号格式不正确</p>\n              </ion-text>\n              <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"registerForm.invalid\">下一步</ion-button>\n          </ion-list>\n        </form>\n    </ion-slide>\n    <ion-slide>\n        <form (ngSubmit)=\"onValidateCode()\" #codeForm=\"ngForm\" style=\"width: 100%;\">\n          <ion-list>\n            <ion-item>\n              <ion-input slot=\"start\" placeholder=\"输入验证码\" name=\"code\" [(ngModel)]=\"register.code\" #code=\"ngModel\" required [disabled]=\"!sended\"></ion-input>\n              <ion-button color=\"primary\" expand=\"full\" slot=\"end\" class=\"full-width\" (click)=\"onSendSMS()\" [disabled]=\"!verifyCode.disable\">{{verifyCode.verifyCodeTips}}</ion-button>\n            </ion-item>\n            <ion-text text-left color=\"danger\" *ngIf=\"(code.invalid && code.touched) || codeForm.submitted\">\n              <p [hidden]=\"!code.errors?.required\" padding-start>请输入验证码</p>\n              <p [hidden]=\"codeIsRight\" padding-start>您输入的验证码不正确</p>\n            </ion-text>\n            <div padding-horizontal>\n              <ion-button type=\"button\" expand=\"full\" color=\"primary\" (click)=\"previous()\">上一步</ion-button>\n            </div>\n            <div padding-horizontal>\n              <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"codeForm.invalid || !sended\">下一步</ion-button>\n            </div>\n            <!-- 根据需求添加若干ion-item -->\n          </ion-list>\n        </form>\n    </ion-slide>\n    <ion-slide>\n        <form (ngSubmit)=\"onInfoSend()\" #infoForm=\"ngForm\" style=\"width: 100%;\">\n        <ion-list>\n          <ion-item>\n            <ion-input name=\"shopName\" type=\"text\" placeholder=\"请输入学校的名称\" required [(ngModel)]=\"register.shopName\" #shopName=\"ngModel\">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input name=\"email\" type=\"text\" placeholder=\"请输入电子邮箱\" required\n                       pattern=\"^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z0-9]{2,6}$\" [(ngModel)]=\"register.email\" #email=\"ngModel\">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input name=\"password\" type=\"password\" placeholder=\"请输入登录密码\" required [(ngModel)]=\"register.password\" #password=\"ngModel\">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input name=\"confirmPassword\" type=\"password\" placeholder=\"请输入确认密码\" required [(ngModel)]=\"register.confirmPassword\" #confirmPassword=\"ngModel\">\n            </ion-input>\n          </ion-item>\n          <ion-text text-left color=\"danger\" *ngIf=\"(shopName.invalid && shopName.touched)\">\n            <p [hidden]=\"!shopName.errors?.required\" padding-start>请输入学校的名称</p>\n          </ion-text>\n          <ion-text text-left color=\"danger\" *ngIf=\"(email.invalid && email.touched)\">\n            <p [hidden]=\"!email.errors?.required\" padding-start>请输入电子邮箱</p>\n            <p [hidden]=\"!email.errors?.pattern\" padding-start>您输入的邮箱格式不正确</p>\n          </ion-text>\n          <ion-text text-left color=\"danger\" *ngIf=\"(password.invalid && password.touched)\">\n            <p [hidden]=\"!password.errors?.required\" padding-start>请输入登录密码</p>\n          </ion-text>\n          <ion-text text-left color=\"danger\" *ngIf=\"(confirmPassword.invalid && confirmPassword.touched) || infoForm.submitted\">\n            <p [hidden]=\"!confirmPassword.errors?.required\" padding-start>请输入确认密码</p>\n            <p [hidden]=\"pwdIsSame\" padding-start>两次输入的密码不一致</p>\n          </ion-text>\n          <div padding-horizontal>\n            <ion-button type=\"button\" expand=\"full\" color=\"primary\" (click)=\"previous()\">上一步</ion-button>\n          </div>\n          <div padding-horizontal>\n            <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"infoForm.invalid\">下一步</ion-button>\n          </div>\n          <!-- 根据需求添加若干ion-item -->\n        </ion-list>\n      </form>\n    </ion-slide>\n    <ion-slide>\n      <div padding-horizontal style=\"width: 100%;\">\n        <ion-text>\n          <p>注册成功</p>\n        </ion-text>\n        <ion-button type=\"button\" expand=\"full\" color=\"primary\" href=\"/login\">立即登录</ion-button>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <app-copyright [bottom]=\"'20px'\"></app-copyright>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-signup .logo {\n  width: 33%; }\n\napp-signup .line {\n  height: 1.5px; }\n\napp-signup .full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_authentication_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication-code.service */ "./src/app/services/authentication-code.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
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




var SignupPage = /** @class */ (function () {
    function SignupPage(authenticationCodeService, userService, toastController, menuController) {
        this.authenticationCodeService = authenticationCodeService;
        this.userService = userService;
        this.toastController = toastController;
        this.menuController = menuController;
        this.slideIndex = 0;
        this.codeIsRight = true;
        this.sended = false;
        this.pwdIsSame = true;
        this.register = {
            phone: '',
            email: '',
            shopName: '',
            password: '',
            confirmPassword: '',
            code: ''
        };
        this.verifyCode = {
            verifyCodeTips: '获取验证码',
            countdown: 60,
            disable: true
        };
    }
    // 字符串'signupSlides'和模板中的#signupSlides引用变量的名称一致
    SignupPage.prototype.ngOnInit = function () {
        this.signupSlides.lockSwipeToNext(true);
    };
    SignupPage.prototype.ionViewDidEnter = function () {
        this.menuController.enable(false);
    };
    SignupPage.prototype.ionViewDidLeave = function () {
        this.menuController.enable(true);
    };
    // getActiveIndex()返回的是promise对象，可以使用then或者await两种方法处理
    // onSlideDidChange(event) {
    //     this.signupSlides.getActiveIndex().then((index) => {
    //       this.slideIndex = index;
    //     });
    // }
    SignupPage.prototype.next = function () {
        this.signupSlides.lockSwipeToNext(false);
        this.signupSlides.slideNext();
        this.signupSlides.lockSwipeToNext(true);
    };
    SignupPage.prototype.previous = function () {
        this.signupSlides.lockSwipeToNext(false);
        this.signupSlides.slidePrev();
        this.signupSlides.lockSwipeToNext(true);
    };
    SignupPage.prototype.onSlideDidChange = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.signupSlides.getActiveIndex()];
                    case 1:
                        _a.slideIndex = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.onSignupPhone = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.userService.check(this.register.phone)) return [3 /*break*/, 1];
                        this.next();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.toastController.create({
                            message: '该手机号已经注册，请直接登录！',
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
    // 倒计时
    SignupPage.prototype.setTime = function () {
        var _this = this;
        if (this.verifyCode.countdown == 1) {
            this.verifyCode.countdown = 60;
            this.verifyCode.verifyCodeTips = '获取验证码';
            this.verifyCode.disable = true;
            return;
        }
        else {
            this.verifyCode.countdown--;
        }
        this.verifyCode.verifyCodeTips = '重新获取(' + this.verifyCode.countdown + ')';
        setTimeout(function () {
            _this.verifyCode.verifyCodeTips = '重新获取(' + _this.verifyCode.countdown + ')';
            _this.setTime();
        }, 1000);
    };
    SignupPage.prototype.onSendSMS = function () {
        this.sended = true;
        this.authenticationCodeService.createCode(4, this.register.phone);
        // 发送验证码成功后开始倒计时
        this.verifyCode.disable = false;
        this.setTime();
    };
    SignupPage.prototype.onValidateCode = function () {
        if (this.authenticationCodeService.validate(this.register.code)) {
            this.codeIsRight = true;
            this.next();
            this.register.code = '';
            this.sended = false;
        }
        else {
            this.codeIsRight = false;
        }
    };
    SignupPage.prototype.onInfoSend = function () {
        if (this.register.password === this.register.confirmPassword) {
            // 注册成功，保存数据
            this.userService.signup1(this.register);
            this.next();
        }
        else {
            this.pwdIsSame = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('signupSlides'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slides"])
    ], SignupPage.prototype, "signupSlides", void 0);
    SignupPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/pages/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_authentication_code_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationCodeService"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module.js.map