(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-product-add-product-module~pages-in-out-stock-in-out-stock-module~pages-product-desc-produ~6ec74f10"],{

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

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");
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



var ProductService = /** @class */ (function () {
    function ProductService(localStorageService) {
        this.localStorageService = localStorageService;
    }
    ProductService.prototype.insert = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var pro;
            return __generator(this, function (_a) {
                input.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID();
                pro = this.localStorageService.get('product', []);
                pro.push(input);
                this.localStorageService.set('product', pro);
                return [2 /*return*/, {
                        targetUrl: '',
                        result: '',
                        success: true,
                        error: null,
                        unAuthorizedRequest: false
                    }];
            });
        });
    };
    ProductService.prototype.getList = function (index, size) {
        return __awaiter(this, void 0, void 0, function () {
            var pro, total, res;
            return __generator(this, function (_a) {
                if (index < 0) {
                    // 实际开发中应抛出异常类对象
                    throw new Error('分页的索引应大于等于零');
                }
                if (size <= 0) {
                    // 实际开发中应抛出异常类对象
                    throw new Error('每页显示的记录数应大于零');
                }
                pro = this.localStorageService.get('product', []);
                total = pro.length;
                pro = pro.slice((index - 1) * size, index * size);
                res = {
                    totalCount: total,
                    product: pro
                };
                return [2 /*return*/, {
                        targetUrl: '',
                        result: res,
                        success: true,
                        error: null,
                        unAuthorizedRequest: false
                    }];
            });
        });
    };
    ProductService.prototype.getListByCategoryId = function (index, size, categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var pro, p, _i, pro_1, x, total, res;
            return __generator(this, function (_a) {
                pro = this.localStorageService.get('product', []);
                p = [];
                for (_i = 0, pro_1 = pro; _i < pro_1.length; _i++) {
                    x = pro_1[_i];
                    if (x.categoryId == categoryId) {
                        p.push(x);
                    }
                }
                total = p.length;
                p = p.slice((index - 1) * size, index * size);
                res = {
                    totalCount: total,
                    product: p
                };
                return [2 /*return*/, {
                        targetUrl: '',
                        result: res,
                        success: true,
                        error: null,
                        unAuthorizedRequest: false
                    }];
            });
        });
    };
    ProductService.prototype.getProductById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var pro, _i, pro_2, x;
            return __generator(this, function (_a) {
                pro = this.localStorageService.get('product', []);
                for (_i = 0, pro_2 = pro; _i < pro_2.length; _i++) {
                    x = pro_2[_i];
                    if (x.id == id) {
                        return [2 /*return*/, {
                                targetUrl: '',
                                result: x,
                                success: true,
                                error: null,
                                unAuthorizedRequest: false
                            }];
                    }
                }
                return [2 /*return*/, {
                        targetUrl: '',
                        result: '',
                        success: false,
                        error: null,
                        unAuthorizedRequest: false
                    }];
            });
        });
    };
    ProductService.prototype.getListByCondition = function (searchProductInput) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ProductService.prototype.delete = function (id) {
        var pro = this.localStorageService.get('product', []);
        for (var i = 0; i < pro.length; i++) {
            if (pro[i].id == id) {
                pro.splice(i, 1);
                this.localStorageService.set('product', pro);
                return true;
            }
        }
        return false;
    };
    ProductService.prototype.update = function (product) {
        var pro = this.localStorageService.get('product', []);
        for (var i = 0; i < pro.length; i++) {
            if (pro[i].id == product.id) {
                pro[i] = product;
                this.localStorageService.set('product', pro);
                return true;
            }
        }
        return false;
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], ProductService);
    return ProductService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-product-add-product-module~pages-in-out-stock-in-out-stock-module~pages-product-desc-produ~6ec74f10.js.map