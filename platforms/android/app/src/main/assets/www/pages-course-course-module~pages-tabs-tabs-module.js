(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-course-course-module~pages-tabs-tabs-module"],{

/***/ "./src/app/pages/course/course.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/course/course.module.ts ***!
  \***********************************************/
/*! exports provided: CoursePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePageModule", function() { return CoursePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _course_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course.page */ "./src/app/pages/course/course.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _course_page__WEBPACK_IMPORTED_MODULE_5__["CoursePage"]
    }
];
var CoursePageModule = /** @class */ (function () {
    function CoursePageModule() {
    }
    CoursePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_course_page__WEBPACK_IMPORTED_MODULE_5__["CoursePage"]]
        })
    ], CoursePageModule);
    return CoursePageModule;
}());



/***/ }),

/***/ "./src/app/pages/course/course.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/course/course.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>班课列表</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"light\" slot=\"end\" (click)=\"onPresentActionSheet()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-list lines=\"full\" color=\"light\">\n    <ion-item *ngFor=\"let p of course\" >\n      <ion-col size=\"2\">\n        <img src=\"assets/img/c_goodspicture.png\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"9\" (click)=\"onSelectCourse(p.courseId)\">\n        <ion-row>2018级工硕-1</ion-row>\n        <ion-row>{{p.name}}</ion-row>\n        <ion-row>\n          <ion-text color=\"medium\">{{p.teacher}}</ion-text>\n          <ion-text padding-start=\"5px\" color=\"medium\">学校课表班课</ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon name=\"share\" (click)=\"onPresentActionSheetShare()\"></ion-icon>\n      </ion-col>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/course/course.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/course/course.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/course/course.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/course/course.page.ts ***!
  \*********************************************/
/*! exports provided: CoursePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePage", function() { return CoursePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_app_share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app-share.service */ "./src/app/services/app-share.service.ts");
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





var CoursePage = /** @class */ (function () {
    function CoursePage(actionSheetController, ngZone, router, alertController, localStorage, events, toastController, appShare) {
        var _this = this;
        this.actionSheetController = actionSheetController;
        this.ngZone = ngZone;
        this.router = router;
        this.alertController = alertController;
        this.localStorage = localStorage;
        this.events = events;
        this.toastController = toastController;
        this.appShare = appShare;
        this.events.subscribe('course:created', function (course, time) {
            _this.course = course;
        });
    }
    CoursePage.prototype.ngOnInit = function () {
        this.loginUser = this.localStorage.get('login', null);
        // let x = [
        //     {
        //         name: '数学',
        //         courseId: '001',
        //         desc: '一节普普通通的数学课',
        //         owner: 'teacher',
        //         teacher: '郭乙龙',
        //         maxNum: 30
        //     },
        //     {
        //         name: '语文',
        //         courseId: '002',
        //         desc: '一节普普通通的语文课',
        //         owner: 'student',
        //         teacher: '郭乙龙',
        //         maxNum: 30
        //     }
        // ];
        // this.course = x;
        this.initCourse();
    };
    CoursePage.prototype.initCourse = function () {
        this.course = this.localStorage.get('course', null);
    };
    CoursePage.prototype.onPresentActionSheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loginUser = this.localStorage.get('login', null);
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: '选择您的操作',
                                buttons: [
                                    {
                                        text: '创建班课',
                                        role: 'destructive',
                                        handler: function () {
                                            _this.ngZone.run(function () {
                                                _this.router.navigate(['/addCourse'], { queryParams: { 'owner': _this.loginUser.shopName } });
                                            });
                                        }
                                    }, {
                                        text: '通过班课号加入班课',
                                        handler: function () {
                                            _this.presentAlertPrompt();
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
    CoursePage.prototype.presentAlertPrompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loginUser = this.localStorage.get('login', null);
                        return [4 /*yield*/, this.alertController.create({
                                header: '通过班课号加入班课',
                                inputs: [
                                    {
                                        name: 'courseId',
                                        type: 'text',
                                        placeholder: '输入班课号'
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
                                            // todo 加入班课
                                            _this.ngZone.run(function () {
                                                _this.addSuccess(data.courseId);
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
    CoursePage.prototype.addSuccess = function (courseId) {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(courseId.length == 8)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertController.create({
                                header: '提示',
                                message: '加入成功',
                                buttons: ['确定']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        alert_1.present();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.toastController.create({
                            message: '请输入正确的班课号！',
                            duration: 3000
                        })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 4;
                    case 4:
                        this.initCourse();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoursePage.prototype.onSelectCourse = function (courseId) {
        this.loginUser = this.localStorage.get('login', null);
        for (var _i = 0, _a = this.course; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.courseId === courseId && this.loginUser != null) {
                if (this.loginUser.shopName == 'admin' || this.loginUser.shopName == c.owner) {
                    this.router.navigate(['/courseDetial'], { queryParams: { 'courseId': courseId.substring(0, 8) } });
                }
                else {
                    this.router.navigateByUrl('signIn');
                }
            }
        }
    };
    CoursePage.prototype.onPresentActionSheetShare = function () {
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
    CoursePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.page.html */ "./src/app/pages/course/course.page.html"),
            styles: [__webpack_require__(/*! ./course.page.scss */ "./src/app/pages/course/course.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _services_app_share_service__WEBPACK_IMPORTED_MODULE_4__["AppShare"]])
    ], CoursePage);
    return CoursePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-course-course-module~pages-tabs-tabs-module.js.map