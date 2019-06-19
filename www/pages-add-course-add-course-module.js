(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-course-add-course-module"],{

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

/***/ "./src/app/pages/add-course/add-course.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-course/add-course.module.ts ***!
  \*******************************************************/
/*! exports provided: AddCoursePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCoursePageModule", function() { return AddCoursePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _add_course_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-course.page */ "./src/app/pages/add-course/add-course.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_course_page__WEBPACK_IMPORTED_MODULE_5__["AddCoursePage"]
    }
];
var AddCoursePageModule = /** @class */ (function () {
    function AddCoursePageModule() {
    }
    AddCoursePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_course_page__WEBPACK_IMPORTED_MODULE_5__["AddCoursePage"]]
        })
    ], AddCoursePageModule);
    return AddCoursePageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-course/add-course.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-course/add-course.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>返回\n      </ion-button>\n    </ion-buttons>\n    <ion-title>新增班课</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)=\"onSave()\" #addCourseForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label position=\"fixed\">班课名称</ion-label>\n        <ion-input name=\"name\" type=\"text\" placeholder=\"班课名称\" [(ngModel)]=\"course.name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">教师名称</ion-label>\n        <ion-input name=\"teacher\" type=\"text\" placeholder=\"教师名称\" [(ngModel)]=\"course.teacher\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">描述</ion-label>\n        <ion-input name=\"desc\" type=\"text\" placeholder=\"班课描述\" [(ngModel)]=\"course.desc\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">限选人数</ion-label>\n        <ion-input name=\"maxNum\" type=\"number\" placeholder=\"最大限选人数\" [(ngModel)]=\"course.maxNum\"></ion-input>\n      </ion-item>\n      <div padding-horizontal>\n        <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"addCourseForm.invalid\">保存</ion-button>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/add-course/add-course.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-course/add-course.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/add-course/add-course.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/add-course/add-course.page.ts ***!
  \*****************************************************/
/*! exports provided: AddCoursePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCoursePage", function() { return AddCoursePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_5__);
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






var AddCoursePage = /** @class */ (function () {
    function AddCoursePage(location, activatedRoute, localStorage, alertController, router, toastController, ngZone, events) {
        var _this = this;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.localStorage = localStorage;
        this.alertController = alertController;
        this.router = router;
        this.toastController = toastController;
        this.ngZone = ngZone;
        this.events = events;
        this.course = {
            name: '',
            courseId: angular2_uuid__WEBPACK_IMPORTED_MODULE_5__["UUID"].UUID(),
            desc: '',
            owner: '',
            teacher: '',
            maxNum: 0
        };
        activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.course.owner = queryParams.owner;
        });
    }
    AddCoursePage.prototype.ngOnInit = function () {
    };
    AddCoursePage.prototype.back = function () {
        this.location.back();
    };
    AddCoursePage.prototype.onSave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var c_1, alert_1, toast;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.course.maxNum > 0)) return [3 /*break*/, 2];
                        c_1 = this.localStorage.get('course', []);
                        c_1.push(this.course);
                        return [4 /*yield*/, this.alertController.create({
                                header: '提示',
                                message: '新增成功',
                                buttons: ['确定']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        alert_1.present();
                        this.ngZone.run(function () {
                            _this.localStorage.set('course', c_1);
                            _this.events.publish('course:created', c_1, Date.now());
                            _this.router.navigateByUrl('tabs');
                        });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.toastController.create({
                            message: '请注意限选人数要大于0！',
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
    AddCoursePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-course',
            template: __webpack_require__(/*! ./add-course.page.html */ "./src/app/pages/add-course/add-course.page.html"),
            styles: [__webpack_require__(/*! ./add-course.page.scss */ "./src/app/pages/add-course/add-course.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
    ], AddCoursePage);
    return AddCoursePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-course-add-course-module.js.map