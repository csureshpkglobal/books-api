(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!**************************************!*\
  !*** multi ./apps/store/src/main.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\csuresh\Desktop\PK\facade-ngrx\apps\store\src\main.ts */"Pi+H");


/***/ }),

/***/ "3l3l":
/*!******************************************************!*\
  !*** ./apps/store/src/app/ngrx-store/app.reducer.ts ***!
  \******************************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _cart_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.reducer */ "49Ut");
/* harmony import */ var _collection_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection.reducer */ "IHZc");


const appReducer = {
    cart: _cart_reducer__WEBPACK_IMPORTED_MODULE_0__["cartReducer"],
    collection: _collection_reducer__WEBPACK_IMPORTED_MODULE_1__["collectionReducer"],
};


/***/ }),

/***/ "49Ut":
/*!*******************************************************!*\
  !*** ./apps/store/src/app/ngrx-store/cart.reducer.ts ***!
  \*******************************************************/
/*! exports provided: initialState, cartReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartReducer", function() { return cartReducer; });
/* harmony import */ var _cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.actions */ "SPSm");

const initialState = {
    cartItems: [],
    isCart: false,
    items: [],
    searchWord: '',
    selectedId: -1,
    recentSearchWords: [],
    book: null,
};
function cartReducer(state = initialState, action) {
    switch (action.type) {
        case _cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_CARTITEM"]:
            return Object.assign(Object.assign({}, state), { cartItems: [...state.cartItems, action.payload], isCart: false });
        case _cart_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_CARTITEM"]:
            return Object.assign(Object.assign({}, state), { cartItems: state.cartItems.filter((book) => {
                    return book.id !== action.payload;
                }), isCart: false });
        case _cart_actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_CART"]:
            return Object.assign(Object.assign({}, state), { cartItems: [], isCart: false });
        case _cart_actions__WEBPACK_IMPORTED_MODULE_0__["IS_CART"]:
            return Object.assign(Object.assign({}, state), { isCart: action.payload });
        // case CartActions.GET_BOOKSBYNAME:
        //   return {
        //     ...state,
        //     searchWord: action.payload,
        //   };
        case _cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_BOOKS"]:
            return Object.assign(Object.assign({}, state), { items: action.payload.books });
        case _cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_BOOK"]:
            return Object.assign(Object.assign({}, state), { book: action.payload });
        case _cart_actions__WEBPACK_IMPORTED_MODULE_0__["SELECTED_ID"]:
            return Object.assign(Object.assign({}, state), { selectedId: action.payload });
        case _cart_actions__WEBPACK_IMPORTED_MODULE_0__["RECENT_SEARCHWORDS"]:
            const searchWord = action.payload.trim();
            const searchWords = [...state.recentSearchWords, searchWord];
            // Delete searchword if it already exists without changing last item which will be accessed in search comp
            const index = searchWords.findIndex((value) => value === searchWord);
            if (index !== searchWords.length - 1) {
                searchWords.splice(index, 1);
            }
            return Object.assign(Object.assign({}, state), { recentSearchWords: [...searchWords] });
        default:
            return state;
    }
}


/***/ }),

/***/ "5SmY":
/*!*******************************************************************!*\
  !*** ./apps/store/src/app/billing-page/billing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: BillingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingPageComponent", function() { return BillingPageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _snak_bar_snak_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../snak-bar/snak-bar.component */ "kWqY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _app_ngrx_store_books_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/ngrx-store/books-facade.service */ "Oya0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function BillingPageComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BillingPageComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BillingPageComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BillingPageComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class BillingPageComponent {
    constructor(snackBar, fb, booksFacadeService) {
        this.snackBar = snackBar;
        this.fb = fb;
        this.booksFacadeService = booksFacadeService;
        this.isValid = true;
        this.books = [];
        this.isCart = false;
        this.billingForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    ngOnInit() {
        this.booksFacadeService.getAllCartItems$.subscribe((result) => (this.books = result));
        this.booksFacadeService.isCart$.subscribe((isCart) => (this.isCart = isCart));
    }
    onSubmit(name, email, phone, address) {
        if (this.isCart) {
            this.books.forEach((book) => {
                this.collection = {
                    title: (book === null || book === void 0 ? void 0 : book.title) || '',
                    imgLink: (book === null || book === void 0 ? void 0 : book.imageLink) || '',
                    description: (book === null || book === void 0 ? void 0 : book.description) || '',
                    authors: (book === null || book === void 0 ? void 0 : book.authors) || '',
                    name: name || '',
                    email: email || '',
                    phone: phone || 0,
                    address: address || '',
                };
                this.booksFacadeService.addCollection(this.collection);
            });
            this.booksFacadeService.clearItems();
        }
        else {
            this.booksFacadeService.getBookInCollection$.subscribe((book) => {
                this.collection = {
                    title: (book === null || book === void 0 ? void 0 : book.title) || '',
                    imgLink: (book === null || book === void 0 ? void 0 : book.imageLink) || '',
                    description: (book === null || book === void 0 ? void 0 : book.description) || '',
                    authors: (book === null || book === void 0 ? void 0 : book.authors) || '',
                    name: name || '',
                    email: email || '',
                    phone: phone || 0,
                    address: address || '',
                };
            });
            this.booksFacadeService.addCollection(this.collection);
        }
        this.snackBar.openFromComponent(_snak_bar_snak_bar_component__WEBPACK_IMPORTED_MODULE_1__["SnakBarComponent"], {
            duration: 2000,
            panelClass: 'blue-snackbar',
        });
    }
}
BillingPageComponent.ɵfac = function BillingPageComponent_Factory(t) { return new (t || BillingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_ngrx_store_books_facade_service__WEBPACK_IMPORTED_MODULE_4__["BooksFacadeService"])); };
BillingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BillingPageComponent, selectors: [["app-billing-page"]], decls: 25, vars: 6, consts: [["id", "billingForm", 3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "placeholder", "pk@example.com", "required", ""], ["matInput", "", "formControlName", "phone"], ["formControlName", "address", "matInput", ""], ["color", "primary", "mat-flat-button", "", 3, "disabled"]], template: function BillingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BillingPageComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(ctx.billingForm.value.name, ctx.billingForm.value.email, ctx.billingForm.value.phone, ctx.billingForm.value.address); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Billing Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BillingPageComponent_mat_error_7_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BillingPageComponent_mat_error_12_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Your phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, BillingPageComponent_mat_error_17_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Your address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, BillingPageComponent_mat_error_22_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.billingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.billingForm.get("name").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.billingForm.get("email").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.billingForm.get("phone").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.billingForm.get("address").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.billingForm.get("name").invalid || ctx.billingForm.get("email").invalid || ctx.billingForm.get("phone").invalid || ctx.billingForm.get("address").invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: ["#billingForm[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGxpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYmlsbGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmlsbGluZ0Zvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "IHZc":
/*!*************************************************************!*\
  !*** ./apps/store/src/app/ngrx-store/collection.reducer.ts ***!
  \*************************************************************/
/*! exports provided: initialState, collectionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectionReducer", function() { return collectionReducer; });
/* harmony import */ var _collection_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection.actions */ "YukE");

const initialState = {
    collections: [],
};
function collectionReducer(state = initialState, action) {
    switch (action.type) {
        case _collection_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_COLLECTION"]:
            return Object.assign(Object.assign({}, state), { collections: [...state.collections, action.payload] });
        default:
            return state;
    }
}


/***/ }),

/***/ "Lujy":
/*!********************************************************!*\
  !*** ./apps/store/src/app/material/material.module.ts ***!
  \********************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











const materialComponents = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[materialComponents], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"]] }); })();


/***/ }),

/***/ "Oya0":
/*!***************************************************************!*\
  !*** ./apps/store/src/app/ngrx-store/books-facade.service.ts ***!
  \***************************************************************/
/*! exports provided: BooksFacadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksFacadeService", function() { return BooksFacadeService; });
/* harmony import */ var _cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.actions */ "SPSm");
/* harmony import */ var _collection_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection.actions */ "YukE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");




class BooksFacadeService {
    constructor(store) {
        this.store = store;
        // Cart Store
        this.getAllItems$ = this.store.select((state) => state.cart.items);
        this.getAllCartItems$ = this.store.select((state) => state.cart.cartItems);
        this.getSelectedItem$ = this.store.select((state) => state.cart.items[state.cart.selectedId]);
        this.isCart$ = this.store.select((state) => state.cart.isCart);
        this.searchWord$ = this.store.select((state) => state.cart.searchWord);
        this.getRecentSearWords$ = this.store.select((state) => state.cart.recentSearchWords);
        this.getBookInCollection$ = this.store.select((state) => state.cart.book);
        // Collection store
        this.getAllCollections$ = this.store.select((state) => state.collection.collections);
    }
    getBooksByName(search) {
        this.store.dispatch(new _cart_actions__WEBPACK_IMPORTED_MODULE_0__["RecentSearchWords"](search));
        this.store.dispatch(new _cart_actions__WEBPACK_IMPORTED_MODULE_0__["GetBooksByName"](search));
    }
    setSelectedId(id) {
        this.store.dispatch(new _cart_actions__WEBPACK_IMPORTED_MODULE_0__["SelectedId"](id));
    }
    addCartItem(book) {
        this.store.dispatch(new _cart_actions__WEBPACK_IMPORTED_MODULE_0__["AddCartItem"](book));
    }
    updateCart(flag) {
        this.store.dispatch(new _cart_actions__WEBPACK_IMPORTED_MODULE_0__["IsCart"](flag));
    }
    deleteItem(id) {
        this.store.dispatch(new _cart_actions__WEBPACK_IMPORTED_MODULE_0__["DeletCartItem"](id));
    }
    clearItems() {
        this.store.dispatch(new _cart_actions__WEBPACK_IMPORTED_MODULE_0__["ClearCart"]());
    }
    // Collection API
    addBook(book) {
        this.store.dispatch(new _cart_actions__WEBPACK_IMPORTED_MODULE_0__["AddBook"](book));
    }
    addCollection(collection) {
        this.store.dispatch(new _collection_actions__WEBPACK_IMPORTED_MODULE_1__["AddCollection"](collection));
    }
}
BooksFacadeService.ɵfac = function BooksFacadeService_Factory(t) { return new (t || BooksFacadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
BooksFacadeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BooksFacadeService, factory: BooksFacadeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Pi+H":
/*!********************************!*\
  !*** ./apps/store/src/main.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "iuQf");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "j4Kg");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "SPSm":
/*!*******************************************************!*\
  !*** ./apps/store/src/app/ngrx-store/cart.actions.ts ***!
  \*******************************************************/
/*! exports provided: ADD_CARTITEM, DELETE_CARTITEM, CLEAR_CART, IS_CART, ADD_BOOKS, ADD_BOOK, SELECTED_ID, RECENT_SEARCHWORDS, GET_BOOKSBYNAME, AddCartItem, DeletCartItem, ClearCart, IsCart, GetBooksByName, AddBooks, SelectedId, RecentSearchWords, AddBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CARTITEM", function() { return ADD_CARTITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CARTITEM", function() { return DELETE_CARTITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CART", function() { return CLEAR_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_CART", function() { return IS_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOKS", function() { return ADD_BOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOK", function() { return ADD_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_ID", function() { return SELECTED_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECENT_SEARCHWORDS", function() { return RECENT_SEARCHWORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BOOKSBYNAME", function() { return GET_BOOKSBYNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCartItem", function() { return AddCartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletCartItem", function() { return DeletCartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearCart", function() { return ClearCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsCart", function() { return IsCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBooksByName", function() { return GetBooksByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBooks", function() { return AddBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedId", function() { return SelectedId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentSearchWords", function() { return RecentSearchWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBook", function() { return AddBook; });
const ADD_CARTITEM = '[Cart] ADD_CARTITEM';
const DELETE_CARTITEM = '[Cart] DELETE_CARTITEM';
const CLEAR_CART = '[Cart] CLEAR_CART';
const IS_CART = '[Cart] IS_CART';
const ADD_BOOKS = '[Cart] ADD_BOOKS';
const ADD_BOOK = '[Cart] ADD_BOOK';
const SELECTED_ID = '[Cart] SELECTED_ID';
const RECENT_SEARCHWORDS = '[Cart] RECENT SEARCH WORDS';
// Effects
const GET_BOOKSBYNAME = '[Cart] GET_BOOKSBYNAME';
class AddCartItem {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_CARTITEM;
    }
}
class DeletCartItem {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_CARTITEM;
    }
}
class ClearCart {
    constructor() {
        this.type = CLEAR_CART;
    }
}
class IsCart {
    constructor(payload) {
        this.payload = payload;
        this.type = IS_CART;
    }
}
class GetBooksByName {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_BOOKSBYNAME;
    }
}
class AddBooks {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_BOOKS;
    }
}
class SelectedId {
    constructor(payload) {
        this.payload = payload;
        this.type = SELECTED_ID;
    }
}
class RecentSearchWords {
    constructor(payload) {
        this.payload = payload;
        this.type = RECENT_SEARCHWORDS;
    }
}
class AddBook {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_BOOK;
    }
}


/***/ }),

/***/ "WQV/":
/*!**************************************************!*\
  !*** ./apps/store/src/app/app-routing.module.ts ***!
  \**************************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _billing_page_billing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./billing-page/billing-page.component */ "5SmY");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-details/book-details.component */ "tkoi");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "uTWV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    {
        path: 'cart',
        loadChildren: () => __webpack_require__.e(/*! import() | carts-carts-module */ "carts-carts-module").then(__webpack_require__.bind(null, /*! ./carts/carts.module */ "j7He")).then((m) => m.CartsModule),
    },
    {
        path: 'mycollection',
        loadChildren: () => __webpack_require__.e(/*! import() | mycollections-mycollections-module */ "mycollections-mycollections-module").then(__webpack_require__.bind(null, /*! ./mycollections/mycollections.module */ "yUMG")).then((m) => m.MycollectionsModule),
    },
    { path: 'bookdetails', component: _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_2__["BookDetailsComponent"] },
    { path: 'billingpage', component: _billing_page_billing_page_component__WEBPACK_IMPORTED_MODULE_1__["BillingPageComponent"] },
    { path: '', redirectTo: '/search', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routingComponents = [_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _billing_page_billing_page_component__WEBPACK_IMPORTED_MODULE_1__["BillingPageComponent"]];


/***/ }),

/***/ "YukE":
/*!*************************************************************!*\
  !*** ./apps/store/src/app/ngrx-store/collection.actions.ts ***!
  \*************************************************************/
/*! exports provided: ADD_COLLECTION, AddCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COLLECTION", function() { return ADD_COLLECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCollection", function() { return AddCollection; });
const ADD_COLLECTION = 'ADD_COLLECTION';
class AddCollection {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_COLLECTION;
    }
}


/***/ }),

/***/ "iuQf":
/*!******************************************!*\
  !*** ./apps/store/src/app/app.module.ts ***!
  \******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "WQV/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "m8Yr");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "Lujy");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-details/book-details.component */ "tkoi");
/* harmony import */ var _billing_page_billing_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./billing-page/billing-page.component */ "5SmY");
/* harmony import */ var _snak_bar_snak_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./snak-bar/snak-bar.component */ "kWqY");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _app_ngrx_store_app_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../app/ngrx-store/app.reducer */ "3l3l");
/* harmony import */ var _ngrx_store_cart_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ngrx-store/cart.effects */ "unzI");
/* harmony import */ var _app_ngrx_store_books_facade_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../app/ngrx-store/books-facade.service */ "Oya0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search/search.component */ "uTWV");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [_app_ngrx_store_books_facade_service__WEBPACK_IMPORTED_MODULE_14__["BooksFacadeService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_app_ngrx_store_app_reducer__WEBPACK_IMPORTED_MODULE_12__["appReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forRoot([_ngrx_store_cart_effects__WEBPACK_IMPORTED_MODULE_13__["CartEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_16__["SearchComponent"], _billing_page_billing_page_component__WEBPACK_IMPORTED_MODULE_8__["BillingPageComponent"], _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_7__["BookDetailsComponent"],
        _billing_page_billing_page_component__WEBPACK_IMPORTED_MODULE_8__["BillingPageComponent"],
        _snak_bar_snak_bar_component__WEBPACK_IMPORTED_MODULE_9__["SnakBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsRootModule"]] }); })();


/***/ }),

/***/ "j4Kg":
/*!****************************************************!*\
  !*** ./apps/store/src/environments/environment.ts ***!
  \****************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "kWqY":
/*!***********************************************************!*\
  !*** ./apps/store/src/app/snak-bar/snak-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SnakBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakBarComponent", function() { return SnakBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SnakBarComponent {
    constructor() { }
    ngOnInit() { }
}
SnakBarComponent.ɵfac = function SnakBarComponent_Factory(t) { return new (t || SnakBarComponent)(); };
SnakBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnakBarComponent, selectors: [["app-snak-bar"]], decls: 2, vars: 0, template: function SnakBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Purchase is successful");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".blue-snackbar[_ngcontent-%COMP%] {\r\n  background-color: blue;\r\n  color: blue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuYWstYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiIiwiZmlsZSI6InNuYWstYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ZS1zbmFja2JhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "m8Yr":
/*!*********************************************!*\
  !*** ./apps/store/src/app/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ngrx_store_books_facade_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/ngrx-store/books-facade.service */ "Oya0");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









class AppComponent {
    constructor(booksFacadeService) {
        this.booksFacadeService = booksFacadeService;
        this.opened = true;
        this.title = 'store';
    }
    ngOnInit() {
        this.items$ = this.booksFacadeService.getAllCartItems$;
        this.collections$ = this.booksFacadeService.getAllCollections$;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_ngrx_store_books_facade_service__WEBPACK_IMPORTED_MODULE_1__["BooksFacadeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 29, vars: 13, consts: [["color", "primary"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [3, "click"], [1, "main-title"], [1, "example-spacer"], ["mode", "side", 3, "opened", "openedChange"], ["routerLink", "/search", "routerLinkActive", "active"], ["routerLink", "/cart"], ["matBadgeColor", "warn", "matBadgePosition", "above before", 3, "matBadgeHidden", "matBadge"], ["routerLink", "/mycollection"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_icon_click_2_listener() { return ctx.opened = !ctx.opened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-sidenav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function AppComponent_Template_mat_sidenav_openedChange_8_listener($event) { return ctx.opened = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "library_books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " My Collection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadgeHidden", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 5, ctx.items$).length)("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 7, ctx.items$).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadgeHidden", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 9, ctx.collections$).length)("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 11, ctx.collections$).length);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadge"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["mat-sidenav-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\nmat-sidenav[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n}\r\nmat-sidenav[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  width: 200px;\r\n  cursor: pointer;\r\n}\r\nmat-sidenav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  margin-left: 15px;\r\n}\r\n#navbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsYUFBYTtBQUNmO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxubWF0LXNpZGVuYXYsXHJcbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxubWF0LXNpZGVuYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxubWF0LXNpZGVuYXYgZGl2IHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuI25hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "tkoi":
/*!*******************************************************************!*\
  !*** ./apps/store/src/app/book-details/book-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_ngrx_store_books_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/ngrx-store/books-facade.service */ "Oya0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function BookDetailsComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookDetailsComponent_mat_card_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Add to Card ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookDetailsComponent_mat_card_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.buyNow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookDetails_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bookDetails_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", bookDetails_r1.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating : ", bookDetails_r1.ratingsCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Publisher : ", bookDetails_r1.publisher, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Page Count : ", bookDetails_r1.pageCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Language : ", bookDetails_r1.language, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bookDetails_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Written By ", bookDetails_r1.authors, "");
} }
class BookDetailsComponent {
    constructor(router, booksFacadeService) {
        this.router = router;
        this.booksFacadeService = booksFacadeService;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.bookDetails$ = this.booksFacadeService.getSelectedItem$;
        this.bookDetails$.subscribe((result) => {
            this.book = result;
        });
    }
    addToCart() {
        this.booksFacadeService.addCartItem(this.book);
    }
    buyNow() {
        this.booksFacadeService.addBook(this.book);
        this.router.navigate(['/billingpage']);
    }
}
BookDetailsComponent.ɵfac = function BookDetailsComponent_Factory(t) { return new (t || BookDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_ngrx_store_books_facade_service__WEBPACK_IMPORTED_MODULE_2__["BooksFacadeService"])); };
BookDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookDetailsComponent, selectors: [["app-book-details"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "src"], [1, "rating"], [1, "publisher"], [1, "pageCount"], [1, "Language"], [1, "description"], [1, "written"], ["color", "primary", "mat-flat-button", "", 3, "click"]], template: function BookDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookDetailsComponent_mat_card_0_Template, 22, 8, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.bookDetails$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".written[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\nmat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  margin-left: 6%;\r\n  margin-right: 6%;\r\n  margin-bottom: 1rem;\r\n  margin-top: 1rem;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n  height: 70px;\r\n  float: right;\r\n}\r\n.mat-card-title[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 5rem;\r\n}\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  margin-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJib29rLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cml0dGVuIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbm1hdC1jYXJkLWFjdGlvbnMgYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiA2JTtcclxuICBtYXJnaW4tcmlnaHQ6IDYlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5pbWcge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLm1hdC1jYXJkLXRpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "uTWV":
/*!*******************************************************!*\
  !*** ./apps/store/src/app/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_ngrx_store_books_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/ngrx-store/books-facade.service */ "Oya0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");










function SearchComponent_mat_grid_tile_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_mat_grid_tile_8_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.getBookDetails(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r1.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Written By ", item_r1.authors, "");
} }
class SearchComponent {
    constructor(router, fb, booksFacadeService) {
        this.router = router;
        this.fb = fb;
        this.booksFacadeService = booksFacadeService;
        this.searchWord = '';
        this.subscriptions = [];
        this.searchForm = this.fb.group({
            searchWord: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.items$ = this.booksFacadeService.getAllItems$;
    }
    ngOnInit() {
        this.booksFacadeService.getRecentSearWords$.subscribe((recentSearchWords) => {
            this.searchWord = recentSearchWords[recentSearchWords.length - 1] || '';
            this.searchForm.patchValue({ searchWord: this.searchWord });
        });
        if (this.searchWord !== '') {
            this.booksFacadeService.getBooksByName(this.searchWord);
        }
    }
    onSubmit() {
        this.booksFacadeService.getBooksByName(this.searchForm.controls.searchWord.value);
    }
    getBookDetails(id) {
        this.booksFacadeService.setSelectedId(parseInt(id, 10));
        this.router.navigate(['/bookdetails']);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_ngrx_store_books_facade_service__WEBPACK_IMPORTED_MODULE_3__["BooksFacadeService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 10, vars: 4, consts: [["id", "searchForm", 3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "searchWord"], [1, "material-icons", "searchicon", 3, "click"], ["cols", "2", "rowHeight", "2:1"], [4, "ngFor", "ngForOf"], [3, "click"], [3, "src"], [1, "description"], [1, "written"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SearchComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Search in Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_span_click_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-grid-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SearchComponent_mat_grid_tile_8_Template, 10, 4, "mat-grid-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 2, ctx.items$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["mat-card[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n  cursor: pointer;\r\n}\r\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  float: right;\r\n}\r\n.description[_ngcontent-%COMP%] {\r\n  text-overflow: ellipsis;\r\n  height: 100px;\r\n  \r\n  overflow: hidden;\r\n}\r\n.written[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\nform[_ngcontent-%COMP%] {\r\n  margin-left: 30%;\r\n}\r\n.searchicon[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\nform#searchForm[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5tYXQtY2FyZCBpbWcge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmRlc2NyaXB0aW9uIHtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7ICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ud3JpdHRlbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5mb3JtIHtcclxuICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcbi5zZWFyY2hpY29uOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuZm9ybSNzZWFyY2hGb3JtIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "unzI":
/*!*******************************************************!*\
  !*** ./apps/store/src/app/ngrx-store/cart.effects.ts ***!
  \*******************************************************/
/*! exports provided: CartEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartEffects", function() { return CartEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store_cart_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ngrx-store/cart.actions */ "SPSm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class CartEffects {
    constructor(actions$, httpClient) {
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.getBooksByName$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_ngrx_store_cart_actions__WEBPACK_IMPORTED_MODULE_3__["GET_BOOKSBYNAME"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((bookData) => {
                return this.httpClient
                    .get('http://localhost:3000/api/books/' + bookData.payload)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
                    const books = res || [];
                    return new _ngrx_store_cart_actions__WEBPACK_IMPORTED_MODULE_3__["AddBooks"]({ books });
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((errorRes) => {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(errorRes);
                }));
            }));
        });
    }
}
CartEffects.ɵfac = function CartEffects_Factory(t) { return new (t || CartEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
CartEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CartEffects, factory: CartEffects.ɵfac });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map