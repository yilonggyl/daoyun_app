(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-change-password-change-password-module"],{

/***/ "./src/app/pages/change-password/change-password.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password.page */ "./src/app/pages/change-password/change-password.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPage"]
    }
];
var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPage"]]
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/change-password/change-password.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>返回\n      </ion-button>\n    </ion-buttons>\n    <ion-title>修改密码</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)=\"onChangePwd()\" #changePwdForm=\"ngForm\" novalidate>\n    <ion-list>\n      <ion-item>\n        <ion-text>请输入旧密码</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-input name=\"oldPwd\" type=\"password\" required [(ngModel)]=\"pwd.old\" #oldPwd=\"ngModel\">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-text>请输入新密码</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-input name=\"newPwd\" type=\"password\" required [(ngModel)]=\"pwd.new\" #newPwd=\"ngModel\">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-text>请再输入一次</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-input name=\"cNewPwd\" type=\"password\" required [(ngModel)]=\"pwd.cNew\" #cNewPwd=\"ngModel\">\n        </ion-input>\n      </ion-item>\n      <ion-text text-left color=\"danger\" *ngIf=\"changePwdForm.submitted\">\n        <p [hidden]=\"newPwd!=cNewPwd\" padding-start>两次输入的密码不一致。</p>\n        <p [hidden]=\"oldIsRight\" padding-start>您输入的旧密码不正确。</p>\n      </ion-text>\n      <div padding-horizontal>\n        <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"changePwdForm.invalid\">下一步</ion-button>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/change-password/change-password.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/change-password/change-password.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.page.ts ***!
  \***************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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






var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(localStorageService, userService, router, alertController, location) {
        this.localStorageService = localStorageService;
        this.userService = userService;
        this.router = router;
        this.alertController = alertController;
        this.location = location;
        this.pwd = {
            old: '',
            new: '',
            cNew: ''
        };
        this.oldIsRight = true;
    }
    ChangePasswordPage.prototype.ngOnInit = function () {
    };
    ChangePasswordPage.prototype.onChangePwd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var login, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        login = this.localStorageService.get('login', null);
                        if (!(login.accounts.passwordToken == this.pwd.old)) return [3 /*break*/, 2];
                        this.userService.update(login.phone, this.pwd.new);
                        login.accounts.passwordToken = this.pwd.new;
                        this.localStorageService.set('login', login);
                        this.router.navigateByUrl('setting');
                        return [4 /*yield*/, this.alertController.create({
                                header: '提示',
                                message: '密码修改成功',
                                buttons: ['确定']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        alert_1.present();
                        return [3 /*break*/, 3];
                    case 2:
                        this.oldIsRight = false;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ChangePasswordPage.prototype.back = function () {
        this.location.back();
    };
    ChangePasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.page.html */ "./src/app/pages/change-password/change-password.page.html"),
            styles: [__webpack_require__(/*! ./change-password.page.scss */ "./src/app/pages/change-password/change-password.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
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
//# sourceMappingURL=pages-change-password-change-password-module.js.map