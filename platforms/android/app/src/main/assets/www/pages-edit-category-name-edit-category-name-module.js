(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-category-name-edit-category-name-module"],{

/***/ "./src/app/pages/edit-category-name/edit-category-name.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/edit-category-name/edit-category-name.module.ts ***!
  \***********************************************************************/
/*! exports provided: EditCategoryNamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryNamePageModule", function() { return EditCategoryNamePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _edit_category_name_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-category-name.page */ "./src/app/pages/edit-category-name/edit-category-name.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _edit_category_name_page__WEBPACK_IMPORTED_MODULE_5__["EditCategoryNamePage"]
    }
];
var EditCategoryNamePageModule = /** @class */ (function () {
    function EditCategoryNamePageModule() {
    }
    EditCategoryNamePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_category_name_page__WEBPACK_IMPORTED_MODULE_5__["EditCategoryNamePage"]]
        })
    ], EditCategoryNamePageModule);
    return EditCategoryNamePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-category-name-edit-category-name-module.js.map