(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-course-detial-course-detial-module"],{

/***/ "./src/app/pages/course-detial/course-detial.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/course-detial/course-detial.module.ts ***!
  \*************************************************************/
/*! exports provided: CourseDetialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetialPageModule", function() { return CourseDetialPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _course_detial_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-detial.page */ "./src/app/pages/course-detial/course-detial.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _course_detial_page__WEBPACK_IMPORTED_MODULE_5__["CourseDetialPage"]
    }
];
var CourseDetialPageModule = /** @class */ (function () {
    function CourseDetialPageModule() {
    }
    CourseDetialPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_course_detial_page__WEBPACK_IMPORTED_MODULE_5__["CourseDetialPage"]]
        })
    ], CourseDetialPageModule);
    return CourseDetialPageModule;
}());



/***/ }),

/***/ "./src/app/pages/course-detial/course-detial.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/course-detial/course-detial.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>返回\n      </ion-button>\n    </ion-buttons>\n    <ion-title>签到</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-list lines=\"full\" color=\"light\">\n    <ion-item color=\"light\">您的班课号为{{courseId}}</ion-item>\n    <ion-item>\n      <ion-col>\n        <ion-button expand=\"full\" color=\"primary\" (click)=\"onSend()\" [disabled]=\"!verifyCode.disable\">{{verifyCode.verifyCodeTips}}</ion-button>\n      </ion-col>\n    </ion-item>\n    <ion-item color=\"light\">学生列表</ion-item>\n    <ion-item *ngFor=\"let s of signInRecord\">\n      <ion-col size=\"9\">\n        <ion-row>{{s.date}} {{s.week}} 签到</ion-row>\n        <ion-row>\n          <ion-text color=\"medium\">{{s.time}}</ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-note slot=\"end\">{{s.status}}</ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/course-detial/course-detial.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/course-detial/course-detial.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/course-detial/course-detial.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/course-detial/course-detial.page.ts ***!
  \***********************************************************/
/*! exports provided: CourseDetialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetialPage", function() { return CourseDetialPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseDetialPage = /** @class */ (function () {
    function CourseDetialPage(location, activatedRoute) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.verifyCode = {
            verifyCodeTips: '发起签到',
            countdown: 60,
            disable: true
        };
    }
    CourseDetialPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.courseId = queryParams.courseId;
        });
    };
    CourseDetialPage.prototype.ngOnInit = function () {
    };
    CourseDetialPage.prototype.back = function () {
        this.location.back();
    };
    CourseDetialPage.prototype.setTime = function () {
        var _this = this;
        if (this.verifyCode.countdown == 1) {
            this.verifyCode.countdown = 60;
            this.verifyCode.verifyCodeTips = '发起签到';
            this.verifyCode.disable = true;
            return;
        }
        else {
            this.verifyCode.countdown--;
        }
        this.verifyCode.verifyCodeTips = '签到结束(' + this.verifyCode.countdown + ')';
        setTimeout(function () {
            _this.verifyCode.verifyCodeTips = '签到结束(' + _this.verifyCode.countdown + ')';
            _this.setTime();
        }, 1000);
    };
    CourseDetialPage.prototype.onSend = function () {
        // 发送验证码成功后开始倒计时
        this.verifyCode.disable = false;
        this.setTime();
    };
    CourseDetialPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-detial',
            template: __webpack_require__(/*! ./course-detial.page.html */ "./src/app/pages/course-detial/course-detial.page.html"),
            styles: [__webpack_require__(/*! ./course-detial.page.scss */ "./src/app/pages/course-detial/course-detial.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CourseDetialPage);
    return CourseDetialPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-course-detial-course-detial-module.js.map