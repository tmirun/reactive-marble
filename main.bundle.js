webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_main_main_component__ = __webpack_require__("../../../../../src/app/pages/main/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/creators/create', pathMatch: 'full' },
    {
        path: ':category/:operator',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_main_main_component__["a" /* MainComponent */],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_repeat__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/repeat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/timer.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'rm';
        this.marble = [
            {
                type: 'label',
                payload: "\n        Rx.Observable.create(function (observer) {\n          observer.next(1);\n          observer.next(2);\n          observer.next(3);\n          observer.complete();\n        });\n      "
            },
            {
                type: 'result',
                name: 'result1',
                payload: function () {
                    return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                        observer.next(1);
                        observer.next(2);
                        observer.next(3);
                        observer.complete();
                    });
                }
            }
        ];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'rm-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_main_main_component__ = __webpack_require__("../../../../../src/app/pages/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng_zorro_antd__["a" /* NgZorroAntdModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlexFill fxLayout=\"column\" class=\"rm-sidebar\">\n  <div fxFlex=\"none\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"rm-sidebar-search\">\n    <i fxFlex=\"none\" class=\"anticon anticon-search\"></i>\n    <nz-select\n      fxFlex\n      style=\"width: 200px;\"\n      nzAllowClear\n      [nzPlaceHolder]=\"'Select a person'\"\n      [ngModel]=\"searchOptions\"\n      nzShowSearch>\n      <nz-option\n        *ngFor=\"let option of searchOptions\"\n        [nzLabel]=\"option.label\"\n        [nzValue]=\"option.value\"\n        [nzDisabled]=\"option.disabled\">\n      </nz-option>\n    </nz-select>\n  </div>\n\n  <ul fxFlex nz-menu nzMode=\"inline\" nzTheme=\"dark\" style=\"width: 100%\">\n    <li nz-submenu [nzOpen]= \"currentCategory === listKey\" *ngFor=\"let listKey of objectKeys(list)\">\n      <span class=\"rm-sidebar-item-title\" title> {{listKey}} </span>\n      <ul>\n        <li class=\"rm-sidebar-item\" nz-menu-item [nzSelected]=\"currentOperator === itemKey\" *ngFor=\"let itemKey of objectKeys(list[listKey])\">\n          <a [routerLink]=\"['/', listKey, itemKey]\">\n            {{itemKey}}\n          </a>\n        </li>\n      </ul>\n    </li>\n    <br/>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .rm-sidebar {\n  overflow-x: scroll;\n  background: #404040; }\n  :host .rm-sidebar .rm-sidebar-item-title {\n    text-transform: uppercase; }\n  :host .rm-sidebar .rm-sidebar-item > a::first-letter {\n    text-transform: uppercase; }\n  :host .rm-sidebar .rm-sidebar-search {\n    padding: 8px; }\n  :host .rm-sidebar .rm-sidebar-search i {\n      color: white;\n      font-size: 16px;\n      padding-right: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("../../../../../src/app/data/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(route) {
        this.route = route;
        this.objectKeys = Object.keys;
        this.list = __WEBPACK_IMPORTED_MODULE_1__data__["a" /* operators */];
        this.currentCategory = '';
        this.currentOperator = '';
        this.searchOptions = [];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.currentCategory = params.category;
            _this.currentOperator = params.operator;
        });
        Object.keys(__WEBPACK_IMPORTED_MODULE_1__data__["a" /* operators */]).forEach(function (categoryKey) {
            Object.keys(__WEBPACK_IMPORTED_MODULE_1__data__["a" /* operators */][categoryKey]).forEach(function (operator) {
                _this.searchOptions.push({
                    label: _this.capitalizeFirstLetter(categoryKey) + ": " + _this.capitalizeFirstLetter(operator),
                    value: {
                        category: categoryKey,
                        operator: operator
                    }
                });
            });
        });
    };
    SidebarComponent.prototype.capitalizeFirstLetter = function (string) {
        if (string === void 0) { string = ''; }
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'rm-sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marble_marble_component__ = __webpack_require__("../../../../../src/app/core/marble/marble.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__marble_marble_component__["a" /* MarbleComponent */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__marble_marble_component__["a" /* MarbleComponent */]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/marble/marble.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"rm-marble\" class=\"rm-marble\" #marbleDom>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/marble/marble.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .rm-marble {\n  display: inline; }\n\n:host /deep/ .rm-marble-label {\n  white-space: pre-wrap;\n  width: 600px;\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  padding: 16px;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold;\n  font-size: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/marble/marble.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarbleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_zip__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/zip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_concat__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_delayWhen__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delayWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_zip__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/zip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_concatAll__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__models_Timeline__ = __webpack_require__("../../../../../src/app/core/models/Timeline.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__models_TimelineEmiter__ = __webpack_require__("../../../../../src/app/core/models/TimelineEmiter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_scheduler_VirtualTimeScheduler__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/VirtualTimeScheduler.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var MarbleComponent = /** @class */ (function () {
    function MarbleComponent() {
        this.marble = [];
        this.observables$ = {};
        this.timelines = {};
        this.div_item_prefix = 'rm-marble-item-';
    }
    // NEED REFACTOR
    MarbleComponent.prototype.ngOnInit = function () {
    };
    MarbleComponent.prototype.setObservables = function () {
        var _this = this;
        this.marble.forEach(function (marbleItem) {
            switch (marbleItem.type) {
                case 'input':
                    _this.observables$[marbleItem.name] = new __WEBPACK_IMPORTED_MODULE_18_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](marbleItem.payload);
                    break;
                case 'result':
                    _this.observables$[marbleItem.name] = new __WEBPACK_IMPORTED_MODULE_18_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
                    var resultInputs$_1 = [];
                    // error en modo --pro de compilacion, xk se cambia nombre de argumento
                    var inputsName = _this.getFnParamNames(marbleItem.payload);
                    inputsName.forEach(function (inputName) {
                        if (!inputName || inputName === 'scheduler') {
                            return;
                        }
                        resultInputs$_1.push(_this.observables$[inputName]);
                    });
                    if (resultInputs$_1.length) {
                        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].combineLatest.apply(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */], resultInputs$_1).map(function (itemsDatas) {
                            var resultItems = [];
                            var inputsDelay$ = [];
                            var scheduler = new __WEBPACK_IMPORTED_MODULE_19_rxjs_scheduler_VirtualTimeScheduler__["a" /* VirtualTimeScheduler */](undefined, 100);
                            itemsDatas.forEach(function (items) {
                                var maxRange = _this.getItemLimitRangeFromItemsData(items);
                                var delay$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
                                    items.forEach(function (item) {
                                        if (item.isLimit) {
                                            return;
                                        }
                                        scheduler.schedule(function () { return observer.next(item); }, item.time);
                                    });
                                    scheduler.schedule(function () { return observer.complete(); }, maxRange);
                                });
                                inputsDelay$.push(delay$);
                            });
                            marbleItem.payload.apply(marbleItem, inputsDelay$.concat([scheduler])).subscribe(function (item) {
                                var newItemData = typeof item === 'object' ? new __WEBPACK_IMPORTED_MODULE_17__models_TimelineEmiter__["b" /* TimelineItemData */](scheduler.now(), { value: item.value, color: item.color }) :
                                    new __WEBPACK_IMPORTED_MODULE_17__models_TimelineEmiter__["b" /* TimelineItemData */](scheduler.now(), { value: item });
                                resultItems.push(newItemData);
                            }, null, function () {
                                resultItems.push(new __WEBPACK_IMPORTED_MODULE_17__models_TimelineEmiter__["b" /* TimelineItemData */](scheduler.now(), { isLimit: true }));
                            });
                            scheduler.flush();
                            return resultItems;
                        })
                            .subscribe(function (resultItems) {
                            _this.observables$[marbleItem.name].next(resultItems);
                        });
                    }
                    else {
                        var scheduler_1 = new __WEBPACK_IMPORTED_MODULE_19_rxjs_scheduler_VirtualTimeScheduler__["a" /* VirtualTimeScheduler */](undefined, 100);
                        var resultItems_1 = [];
                        marbleItem.payload(scheduler_1)
                            .subscribe(function (item) {
                            var newItemData = typeof item === 'object' ? new __WEBPACK_IMPORTED_MODULE_17__models_TimelineEmiter__["b" /* TimelineItemData */](scheduler_1.now(), { value: item.value, color: item.color }) :
                                new __WEBPACK_IMPORTED_MODULE_17__models_TimelineEmiter__["b" /* TimelineItemData */](scheduler_1.now(), { value: item });
                            resultItems_1.push(newItemData);
                        }, null, function () {
                            resultItems_1.push(new __WEBPACK_IMPORTED_MODULE_17__models_TimelineEmiter__["b" /* TimelineItemData */](scheduler_1.now(), { isLimit: true }));
                        });
                        scheduler_1.flush();
                        _this.observables$[marbleItem.name].next(resultItems_1);
                    }
                    break;
            }
        });
    };
    MarbleComponent.prototype.draw = function () {
        var _this = this;
        // generate Timelines SVG
        Object.keys(this.observables$).forEach(function (name) {
            var draggable = true;
            if (_this.findMarbleItemByName(name)) {
                if (_this.findMarbleItemByName(name).type === 'result') {
                    draggable = false;
                }
            }
            var _observable = _this.observables$[name];
            _this.timelines[name] = new __WEBPACK_IMPORTED_MODULE_16__models_Timeline__["a" /* Timeline */]("" + _this.div_item_prefix + name, _observable, draggable);
        });
    };
    MarbleComponent.prototype.ngOnChanges = function (changes) {
        if (changes.marble.currentValue) {
            this.observables$ = {};
            this.timelines = {};
            this.clearDom();
            this.createDivs();
            this.setObservables();
            this.draw();
        }
    };
    MarbleComponent.prototype.clearDom = function () {
        var el = this.marbleDom.nativeElement;
        while (el.hasChildNodes()) {
            el.removeChild(el.lastChild);
        }
    };
    MarbleComponent.prototype.createDivs = function () {
        var _this = this;
        this.marble.forEach(function (marbleItem) {
            var newDiv = document.createElement('div');
            newDiv.id = _this.div_item_prefix + marbleItem.name;
            if (marbleItem.type === 'label') {
                newDiv.className = 'rm-marble-label';
                newDiv.innerHTML = marbleItem.payload;
            }
            _this.marbleDom.nativeElement.appendChild(newDiv);
        });
    };
    MarbleComponent.prototype.findMarbleItemByName = function (name) {
        for (var key in this.marble) {
            if (this.marble.hasOwnProperty(key)) {
                var currentMarbleItem = this.marble[key];
                if (currentMarbleItem.name === name) {
                    return currentMarbleItem;
                }
            }
        }
        return null;
    };
    MarbleComponent.prototype.getFnParamNames = function (fn) {
        var functionString = fn.toString();
        return functionString.match(/\(.*?\)/)[0].replace(/[()]/gi, '').replace(/\s/gi, '').split(',');
    };
    MarbleComponent.prototype.getItemLimitRangeFromItemsData = function (itemsData) {
        var time = 100;
        itemsData.forEach(function (itemData) {
            if (itemData.isLimit) {
                time = itemData.time;
            }
        });
        return time;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], MarbleComponent.prototype, "marble", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('marbleDom'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], MarbleComponent.prototype, "marbleDom", void 0);
    MarbleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'rm-marble',
            template: __webpack_require__("../../../../../src/app/core/marble/marble.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/marble/marble.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MarbleComponent);
    return MarbleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/models/Point.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return Point;
}());



/***/ }),

/***/ "../../../../../src/app/core/models/Timeline.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Point__ = __webpack_require__("../../../../../src/app/core/models/Point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TimelineEmiter__ = __webpack_require__("../../../../../src/app/core/models/TimelineEmiter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TimelineLimitLine__ = __webpack_require__("../../../../../src/app/core/models/TimelineLimitLine.ts");



var Timeline = /** @class */ (function () {
    function Timeline(id, input, draggable) {
        if (draggable === void 0) { draggable = true; }
        var _this = this;
        this.svgSize = { width: 600, height: 80 };
        this.margin = 20;
        this.padding = 20;
        this.center = new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* Point */](this.svgSize.width / 2, this.svgSize.height / 2);
        this.initPos = new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* Point */](this.margin, this.center.y);
        this.endPos = new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* Point */](this.svgSize.width - this.margin - this.padding, this.center.y);
        this.endLinePos = new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* Point */](this.svgSize.width - this.margin, this.center.y);
        this._timeMetric = (this.endPos.x - this.initPos.x) / 100;
        this.time = { min: 0, max: 100 };
        this.emiters = [];
        this._emitersData = [];
        this.draw = SVG(id).size(this.svgSize.width, this.svgSize.height);
        this._draggable = draggable;
        // Draw timeline
        // ---------->
        this.draw.line(this.initPos.x, this.initPos.y, this.endLinePos.x, this.endLinePos.y).stroke({ width: 1 });
        this.draw.polygon('0,0 0,12 12,6')
            .fill('black')
            .cx(this.endLinePos.x + 6)
            .cy(this.center.y);
        // // Draw Timeline endPos
        // // -------|->
        this.endLine = new __WEBPACK_IMPORTED_MODULE_2__TimelineLimitLine__["a" /* TimelineLimitLine */](this, 100, this._draggable);
        this.endLine.change$.subscribe(function (time) {
            _this._endLineData.time = time;
            _this.input$.next(_this.mergedItemsData());
        });
        this.input$ = input;
        this.input$.subscribe(function (itemsData) {
            if (itemsData === void 0) { itemsData = []; }
            _this.time.max = _this.getItemlimitRangeFromItemsData(itemsData);
            itemsData = _this.limitItemsDataRange(itemsData);
            var splitData = _this.splitItemsData(itemsData);
            _this._endLineData = splitData.endLineData;
            _this._emitersData = splitData.emitersData;
            _this.refreshEmiters(_this._emitersData);
            _this.endLine.time = _this.time.max;
        });
    }
    Timeline.prototype.refreshEmiters = function (emitersData) {
        var _this = this;
        // remove items
        if (emitersData.length < this.emiters.length) {
            for (var i = emitersData.length; i < this.emiters.length; i++) {
                this.emiters[i].remove();
            }
            this.emiters.splice(emitersData.length, this.emiters.length - emitersData.length);
        }
        emitersData.forEach(function (emiterData, key) {
            var currentItem = _this.emiters[key];
            if (currentItem) {
                // modify item;
                currentItem.time = emiterData.time;
                currentItem.color = emiterData.color;
                currentItem.text.text(emiterData.value + '');
                currentItem.refreshTextCenter();
            }
            else {
                // create new items
                var newTimelineEmiter = new __WEBPACK_IMPORTED_MODULE_1__TimelineEmiter__["a" /* TimelineEmiter */](_this, emiterData, _this._draggable);
                _this.emiters.push(newTimelineEmiter);
                // add event on item time change
                newTimelineEmiter.change$.subscribe(function (time) {
                    _this._emitersData[key].time = time;
                    _this.input$.next(_this.mergedItemsData());
                });
            }
        });
    };
    Timeline.prototype.getItemlimitRangeFromItemsData = function (itemsData) {
        var time = 100;
        itemsData.forEach(function (itemData) {
            if (itemData.isLimit) {
                time = itemData.time;
            }
        });
        return time;
    };
    Timeline.prototype.limitItemsDataRange = function (itemsData) {
        var _this = this;
        return itemsData.map(function (itemData) {
            if (itemData.time > _this.time.max) {
                itemData.time = _this.time.max;
            }
            return itemData;
        });
    };
    Timeline.prototype.splitItemsData = function (itemsData) {
        var result = {
            emitersData: [],
            endLineData: new __WEBPACK_IMPORTED_MODULE_1__TimelineEmiter__["b" /* TimelineItemData */](100, { isLimit: true })
        };
        itemsData.forEach(function (itemData) {
            if (itemData.isLimit) {
                result.endLineData = itemData;
            }
            else {
                result.emitersData.push(itemData);
            }
        });
        return result;
    };
    Timeline.prototype.mergedItemsData = function () {
        return this._emitersData.concat([this._endLineData]);
    };
    return Timeline;
}());



/***/ }),

/***/ "../../../../../src/app/core/models/TimelineEmiter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TimelineItemDataArgument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimelineItemData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineEmiter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");

var TimelineItemDataArgument = /** @class */ (function () {
    function TimelineItemDataArgument() {
    }
    return TimelineItemDataArgument;
}());

var TimelineItemData = /** @class */ (function () {
    function TimelineItemData(time, param) {
        if (param === void 0) { param = {}; }
        this.time = time;
        this.value = param.value;
        this.color = param.color;
        this.isLimit = param.isLimit;
    }
    return TimelineItemData;
}());

var TimelineEmiter = /** @class */ (function () {
    function TimelineEmiter(timeLine, params, draggable) {
        if (draggable === void 0) { draggable = true; }
        var _this = this;
        this.circleSize = 30;
        this.change$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        var defaultParams = {
            time: 10,
            value: null,
            color: 'white'
        };
        params = Object.assign(defaultParams, params);
        this._draggable = draggable;
        this._color = params.color || 'white';
        this.timeline = timeLine;
        this.cy = this.timeline.center.y;
        this.cx = this.timeline.initPos.x;
        this.draw = this.timeline.draw;
        this.group = this.draw.group();
        this.circle = this.draw.circle(this.circleSize);
        this.circle.fill(this._color);
        this.circle.stroke({ width: 1 });
        this.text = this.draw.text("" + params.value);
        this.text.cx(this.circleSize / 2).cy(this.circleSize / 2);
        this.group.add(this.circle);
        this.group.add(this.text);
        this.group.cy(this.timeline.center.y);
        if (this._draggable) {
            this.group.draggable(function (x, y) {
                _this.time = Math.round(x / _this.timeline._timeMetric);
                return { x: false, y: false };
            });
            this.group.style('cursor', 'ew-resize');
            this.group.mousedown(function () {
                _this.group.front();
            });
        }
        this.time = params.time;
    }
    Object.defineProperty(TimelineEmiter.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (time) {
            time = time < this.timeline.time.min ? this.timeline.time.min : time;
            time = time > this.timeline.time.max ? this.timeline.time.max : time;
            if (time === this._time) {
                return;
            }
            this._time = time;
            this.group.cx(this.timeline.initPos.x + this._time * this.timeline._timeMetric);
            this.change$.next(this._time);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimelineEmiter.prototype, "color", {
        set: function (color) {
            this._color = color || 'white';
            this.circle.fill(this._color);
        },
        enumerable: true,
        configurable: true
    });
    TimelineEmiter.prototype.refreshTextCenter = function () {
        this.text.cx(this.circleSize / 2).cy(this.circleSize / 2);
    };
    TimelineEmiter.prototype.remove = function () {
        this.group.remove();
        this.change$.complete();
    };
    return TimelineEmiter;
}());



/***/ }),

/***/ "../../../../../src/app/core/models/TimelineLimitLine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineLimitLine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");

var TimelineLimitLine = /** @class */ (function () {
    function TimelineLimitLine(timeLine, time, draggable) {
        if (draggable === void 0) { draggable = true; }
        var _this = this;
        this.lineSize = 50;
        this.change$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.timeline = timeLine;
        this.draw = this.timeline.draw;
        this._draggable = draggable;
        this.line = this.draw.line(0, this.timeline.endPos.y - this.lineSize / 2, 0, this.timeline.endPos.y + this.lineSize / 2)
            .stroke({ width: 3 });
        if (this._draggable) {
            this.line.draggable(function (x, y) {
                _this.time = Math.round((x - _this.timeline.initPos.x) / _this.timeline._timeMetric);
                return { x: false, y: false };
            });
            this.line.style('cursor', 'ew-resize');
        }
        this.time = time;
    }
    Object.defineProperty(TimelineLimitLine.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (time) {
            if (time === this._time || time < 0 || time > 100) {
                return;
            }
            this._time = time;
            this.line.cx(this.timeline.initPos.x + this._time * this.timeline._timeMetric);
            this.change$.next(this._time);
        },
        enumerable: true,
        configurable: true
    });
    return TimelineLimitLine;
}());



/***/ }),

/***/ "../../../../../src/app/data/combiners.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_models_TimelineEmiter__ = __webpack_require__("../../../../../src/app/core/models/TimelineEmiter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_combineAll__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/combineAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_concatAll__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_concat__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_exhaust__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/exhaust.js");








var list = {
    combineAll: [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 1 },
                { time: 20, value: 2 },
                { time: 30, isLimit: true }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 15, value: 'a' },
                { time: 35, value: 'b' },
                { time: 40, isLimit: true }
            ]
        },
        {
            type: 'label',
            payload: "\n        TODO\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1;
                // return input1.map(() => input2)
                //   .combineAll().map(function (x) {
                //     return 1;
                //   });
            }
        }
    ],
    combineLatest: [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 1 }, { time: 20, value: 2 },
                { time: 50, value: 3 }, { time: 90, value: 6 }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 30, value: 'a' }, { time: 50, value: 'b' },
                { time: 60, value: 'c' }, { time: 70, value: 'd' }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.combineLatest(input2)\n          .map(([item1, item2]) => item1.value + item2.value);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.combineLatest(input2).map(function (_a) {
                    var item1 = _a[0], item2 = _a[1];
                    return item1.value + item2.value;
                });
            }
        }
    ],
    concat: [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 1 },
                { time: 20, value: 2 },
                { time: 30, isLimit: true }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 15, value: 'a' },
                { time: 35, value: 'b' },
                { time: 40, isLimit: true }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.concat(input2)\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.concat(input2).map(function (item) {
                    return item;
                });
            }
        }
    ],
    concatAll: [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 1 },
                { time: 20, value: 2 },
                { time: 30, isLimit: true }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 15, value: 'a' },
                { time: 35, value: 'b' },
                { time: 40, isLimit: true }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.map(() => input2).concatAll()\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.map(function () { return input2; }).concatAll();
            }
        }
    ],
    exhaust: [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 1 },
                { time: 20, value: 2 },
                { time: 30, isLimit: true }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 15, value: 'a' },
                { time: 35, value: 'b' },
                { time: 40, isLimit: true }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.map(() => input2).concatAll()\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.map(function () { return input2; }).exhaust();
            }
        }
    ],
    zip: [
        {
            type: 'input',
            name: 'input1',
            payload: [
                new __WEBPACK_IMPORTED_MODULE_0__core_models_TimelineEmiter__["b" /* TimelineItemData */](10, { value: 1, color: '#2196F3' }),
                new __WEBPACK_IMPORTED_MODULE_0__core_models_TimelineEmiter__["b" /* TimelineItemData */](40, { value: 2, color: '#3F51B5' }),
                new __WEBPACK_IMPORTED_MODULE_0__core_models_TimelineEmiter__["b" /* TimelineItemData */](70, { value: 3, color: '#00BCD4' })
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                new __WEBPACK_IMPORTED_MODULE_0__core_models_TimelineEmiter__["b" /* TimelineItemData */](60, { value: 'A', color: '#4CAF50' }),
                new __WEBPACK_IMPORTED_MODULE_0__core_models_TimelineEmiter__["b" /* TimelineItemData */](90, { value: 'B', color: '#8BC34A' })
            ]
        },
        {
            type: 'label',
            payload: 'Zip',
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].zip(input1, input2).map(function (_a) {
                    var item1 = _a[0], item2 = _a[1];
                    return new __WEBPACK_IMPORTED_MODULE_0__core_models_TimelineEmiter__["b" /* TimelineItemData */](null, { value: item1.value + item2.value, color: item1.color });
                });
            }
        }
    ]
};
/* harmony default export */ __webpack_exports__["a"] = (list);


/***/ }),

/***/ "../../../../../src/app/data/creators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_defer__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/defer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_range__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/range.js");








// "Creating Observables"
var list = {
    'create': [
        {
            type: 'label',
            payload: "\n        Observable.create(function (observer) {\n          observer.next(1);\n          observer.complete();\n        });\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function () {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                    observer.next(1);
                    observer.complete();
                });
            }
        }
    ],
    'defer': [
        {
            type: 'label',
            payload: "\n        Observable.defer(function () {\n            return Rx.Observable.return(42);\n        });\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function () {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].defer(function () {
                    return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of(42);
                });
            }
        }
    ],
    'empty': [
        {
            type: 'label',
            payload: "\n        Observable.empty();\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function () {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].empty();
            }
        }
    ],
    'from': [
        {
            type: 'label',
            payload: "\n        Observable.from([0, 1, 2])\n          .delayWhen(i => Observable.timer(i * 10));\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (scheduler) {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].from([0, 1, 2, 3]).delayWhen(function (i) { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].timer(i * 10); });
            }
        }
    ],
    'interval': [
        {
            type: 'label',
            payload: 'Observable.interval(20)'
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (scheduler) {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].interval(20, scheduler);
            }
        }
    ],
    'range': [
        {
            type: 'label',
            payload: "\n        Observable.range(1, 10)\n          .delayWhen(i => Observable.timer(i * 10, scheduler))\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (scheduler) {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].range(1, 10).delayWhen(function (i) { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].timer(i * 10, scheduler); });
            }
        }
    ],
    'timer': [
        {
            type: 'label',
            payload: "Observable.timer(40, 10)"
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (scheduler) {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].timer(40, 10, scheduler);
            }
        }
    ]
};
/* harmony default export */ __webpack_exports__["a"] = (list);


/***/ }),

/***/ "../../../../../src/app/data/filtering-operators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_audit__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/audit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_auditTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/auditTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounce__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinct__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinct.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_elementAt__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/elementAt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_ignoreElements__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/ignoreElements.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_last__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/last.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_sample__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/sample.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_sampleTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/sampleTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_single__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/single.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_skip__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/skip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_skipLast__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/skipLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_skipUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/skipUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_skipWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/skipWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_takeLast__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_add_operator_throttle__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/throttle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_rxjs_add_operator_throttleTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/throttleTime.js");
























// "Creating Observables"
var list = {
    'audit': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 10, value: 1 },
                { time: 20, value: 2 },
                { time: 40, value: 3 },
                { time: 50, value: 4 },
                { time: 70, value: 5 },
                { time: 80, value: 6 },
                { time: 90, value: 7 },
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [{ time: 10, isLimit: true }]
        },
        {
            type: 'label',
            payload: "\n        input1.audit(() => input2);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.audit(function () { return input2; });
            }
        }
    ],
    'auditTime': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 10, value: 1 },
                { time: 20, value: 2 },
                { time: 40, value: 3 },
                { time: 50, value: 4 },
                { time: 70, value: 5 },
                { time: 80, value: 6 },
                { time: 90, value: 7 },
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.auditTime(10);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, scheduler) {
                return input1.auditTime(10, scheduler);
            }
        }
    ],
    'debounce': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 10, value: 1 },
                { time: 20, value: 2 },
                { time: 40, value: 3 },
                { time: 50, value: 4 },
                { time: 70, value: 5 },
                { time: 80, value: 6 },
                { time: 90, value: 7 },
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [{ time: 10, isLimit: true }]
        },
        {
            type: 'label',
            payload: "\n        input1.debounce(() => input2);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.debounce(function () { return input2; });
            }
        }
    ],
    'debounceTime': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 10, value: 1 },
                { time: 20, value: 2 },
                { time: 40, value: 3 },
                { time: 50, value: 4 },
                { time: 70, value: 5 },
                { time: 80, value: 6 },
                { time: 90, value: 7 },
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.debounceTime(10, scheduler)\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, scheduler) {
                return input1.debounceTime(10, scheduler);
            }
        }
    ],
    'distinct': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 10, value: 1 },
                { time: 20, value: 1 },
                { time: 30, value: 1 },
                { time: 40, value: 2 },
                { time: 50, value: 3 },
                { time: 70, value: 3 },
                { time: 80, value: 4 },
                { time: 90, value: 5 },
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.distinct((item) => item.value);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.distinct(function (item) { return item.value; });
            }
        }
    ],
    'distinctUntilChanged': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 1 },
                { time: 10, value: 1 },
                { time: 20, value: 2 },
                { time: 30, value: 1 },
                { time: 40, value: 2 },
                { time: 50, value: 3 },
                { time: 70, value: 3 },
                { time: 80, value: 4 },
                { time: 90, value: 3 },
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.distinctUntilChanged(\n          (itemOld, item) => itemOld.value === item.value\n        )\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.distinctUntilChanged(function (itemPrevious, item) { return itemPrevious.value === item.value; });
            }
        }
    ],
    ' elementAt': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 'a' },
                { time: 20, value: 'b' },
                { time: 40, value: 'c' },
                { time: 70, value: 'd' },
                { time: 90, value: 'e' },
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.elementAt(2);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.elementAt(2);
            }
        }
    ],
    'filter': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 10, value: 1 },
                { time: 20, value: 2 },
                { time: 30, value: 3 },
                { time: 40, value: 4 },
                { time: 50, value: 5 },
                { time: 60, value: 6 },
                { time: 70, value: 7 },
                { time: 80, value: 8 },
                { time: 90, value: 9 },
                { time: 10, value: 10 }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.filter(item => item.value % 2 === 1);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.filter(function (item) { return item.value % 2 === 1; });
            }
        }
    ],
    'first': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 'a' },
                { time: 20, value: 'b' },
                { time: 40, value: 'c' },
                { time: 70, value: 'd' },
                { time: 90, value: 'e' }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.first();\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.first();
            }
        }
    ],
    'ignoreElements': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 'a' },
                { time: 20, value: 'b' },
                { time: 40, value: 'c' },
                { time: 70, value: 'd' },
                { time: 90, value: 'e' }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.ignoreElements();\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.ignoreElements();
            }
        }
    ],
    'last': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 'a' },
                { time: 20, value: 'b' },
                { time: 40, value: 'c' },
                { time: 70, value: 'd' },
                { time: 90, value: 'e' }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.last();\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.last();
            }
        }
    ],
    'sample': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 'a' },
                { time: 20, value: 'b' },
                { time: 40, value: 'c' },
                { time: 50, value: 'd' },
                { time: 80, value: 'e' }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 15, value: 'x' },
                { time: 30, value: 'x' },
                { time: 60, value: 'x' },
                { time: 70, value: 'x' },
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.last();\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.sample(input2);
            }
        }
    ],
    'sampleTime': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 'a' },
                { time: 20, value: 'b' },
                { time: 40, value: 'c' },
                { time: 50, value: 'd' },
                { time: 80, value: 'e' }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.sampleTime(30);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, scheduler) {
                return input1.sampleTime(30, scheduler);
            }
        }
    ],
    'single': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 'a' },
                { time: 20, value: 'b' },
                { time: 40, value: 'c' },
                { time: 50, value: 'd' },
                { time: 80, value: 'e' }
            ]
        },
        {
            type: 'label',
            payload: "\n        TODO ERROR HANDLER\n      "
        },
    ],
    'skip': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 'a' },
                { time: 20, value: 'b' },
                { time: 40, value: 'c' },
                { time: 50, value: 'd' },
                { time: 80, value: 'e' }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.skip(3);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.skip(3);
            }
        }
    ],
    'skipLast': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 'a' },
                { time: 20, value: 'b' },
                { time: 40, value: 'c' },
                { time: 50, value: 'd' },
                { time: 80, value: 'e' }
            ]
        },
        {
            type: 'label',
            payload: "\n        // TODO ADD INSTANT OPERATIONS\n      "
        }
    ],
    'skipUntil': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 'a' },
                { time: 20, value: 'b' },
                { time: 40, value: 'c' },
                { time: 50, value: 'd' },
                { time: 80, value: 'e' }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 45, value: 'x' },
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.skipUntil(input2);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.skipUntil(input2);
            }
        }
    ],
    'skipWhile': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 1 },
                { time: 20, value: 2 },
                { time: 40, value: 3 },
                { time: 40, value: 4 },
                { time: 50, value: 2 },
                { time: 80, value: 5 }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.skipWhile(item => item.value < 3);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.skipWhile(function (item) { return item.value < 3; });
            }
        }
    ],
    'take': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 'a' },
                { time: 20, value: 'b' },
                { time: 40, value: 'c' },
                { time: 50, value: 'd' },
                { time: 80, value: 'e' }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.take(2);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.take(2);
            }
        }
    ],
    'takeLast': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 'a' },
                { time: 20, value: 'b' },
                { time: 40, value: 'c' },
                { time: 50, value: 'd' },
                { time: 80, value: 'e' }
            ]
        },
        {
            type: 'label',
            payload: "\n        // TODO ADD INSTANT OPERATIONS\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.takeLast(4);
            }
        }
    ],
    'takeUntil': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 'a' },
                { time: 20, value: 'b' },
                { time: 40, value: 'c' },
                { time: 50, value: 'd' },
                { time: 80, value: 'e' }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 45, value: 'x' },
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.takeUntil(input2);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.takeUntil(input2);
            }
        }
    ],
    'takeWhile': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 10, value: 1 },
                { time: 20, value: 2 },
                { time: 40, value: 3 },
                { time: 40, value: 4 },
                { time: 50, value: 2 },
                { time: 80, value: 5 }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.takeWhile(item => item.value < 3);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.takeWhile(function (item) { return item.value < 3; });
            }
        }
    ],
    'throttle': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 15, value: 1 },
                { time: 20, value: 2 },
                { time: 35, value: 3 },
                { time: 40, value: 4 },
                { time: 50, value: 5 },
                { time: 60, value: 6 },
                { time: 75, value: 7 },
                { time: 80, value: 8 },
                { time: 95, value: 9 },
                { time: 100, value: 10 }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 20, isLimit: true },
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.throttle(input2);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.throttle(function () { return input2; });
            }
        }
    ],
    'throttleTime': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 15, value: 1 },
                { time: 20, value: 2 },
                { time: 35, value: 3 },
                { time: 40, value: 4 },
                { time: 50, value: 5 },
                { time: 60, value: 6 },
                { time: 75, value: 7 },
                { time: 80, value: 8 },
                { time: 95, value: 9 },
                { time: 100, value: 10 }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.throttleTime(20);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.throttleTime(20);
            }
        }
    ],
};
/* harmony default export */ __webpack_exports__["a"] = (list);


/***/ }),

/***/ "../../../../../src/app/data/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return operators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creators__ = __webpack_require__("../../../../../src/app/data/creators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combiners__ = __webpack_require__("../../../../../src/app/data/combiners.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transformation_operators__ = __webpack_require__("../../../../../src/app/data/transformation-operators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filtering_operators__ = __webpack_require__("../../../../../src/app/data/filtering-operators.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




/*
* index: http://reactivex.io/documentation/operators.html
* https://github.com/ReactiveX/rxjs/blob/master/doc/operators.md
* */
var operators = {
    'creators': __assign({}, __WEBPACK_IMPORTED_MODULE_0__creators__["a" /* default */]),
    'transformation': __assign({}, __WEBPACK_IMPORTED_MODULE_2__transformation_operators__["a" /* default */]),
    'filtering': __assign({}, __WEBPACK_IMPORTED_MODULE_3__filtering_operators__["a" /* default */]),
    'combiners': __assign({}, __WEBPACK_IMPORTED_MODULE_1__combiners__["a" /* default */]),
};



/***/ }),

/***/ "../../../../../src/app/data/transformation-operators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_buffer__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/buffer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_bufferCount__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/bufferCount.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_bufferTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/bufferTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_bufferWhen__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/bufferWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_concatMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_concatMapTo__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatMapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_exhaustMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/exhaustMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_groupBy__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/groupBy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_mapTo__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_mergeMapTo__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_mergeScan__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeScan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_pluck__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_scan__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_switchMapTo__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_window__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/window.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_add_operator_windowCount__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/windowCount.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_rxjs_add_operator_windowTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/windowTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_rxjs_add_operator_windowToggle__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/windowToggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_rxjs_add_operator_windowWhen__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/windowWhen.js");


























var list = {
    'buffer': [
        {
            type: 'input',
            name: 'input',
            payload: [
                { time: 10, value: 1 }, { time: 20, value: 2 },
                { time: 30, value: 3 }, { time: 60, value: 6 },
                { time: 70, value: 5 }, { time: 90, value: 9 }
            ]
        },
        {
            type: 'label',
            payload: "\n        const interval = Observable.interval(30);\n        observable.buffer(interval)\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input, scheduler) {
                var interval = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].interval(30, scheduler);
                return input.buffer(interval)
                    .map(function (items) {
                    return items.map(function (item) { return item.value; }).join(',');
                });
            }
        }
    ],
    'bufferCount': [
        {
            type: 'input',
            name: 'input',
            payload: [
                { time: 10, value: 1 }, { time: 20, value: 2 },
                { time: 30, value: 3 }, { time: 60, value: 6 },
                { time: 70, value: 5 }, { time: 90, value: 9 }
            ]
        },
        {
            type: 'label',
            payload: "\n        observable.bufferCount(2)\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input) {
                return input.bufferCount(2)
                    .map(function (items) {
                    return items.map(function (item) { return item.value; }).join(',');
                });
            }
        }
    ],
    'bufferTime': [
        {
            type: 'input',
            name: 'input',
            payload: [
                { time: 0, value: 1 }, { time: 20, value: 2 },
                { time: 30, value: 3 }, { time: 60, value: 6 },
                { time: 70, value: 5 }, { time: 90, value: 9 }
            ]
        },
        {
            type: 'label',
            payload: "\n        observable.bufferTime(10)\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input, scheduler) {
                return input.bufferTime(10, scheduler)
                    .map(function (items) {
                    return items.map(function (item) { return item.value; }).join(',');
                });
            }
        }
    ],
    'bufferToggle': [
        {
            type: 'input',
            name: 'input',
            payload: [
                { time: 0, value: 1 }, { time: 20, value: 2 },
                { time: 30, value: 3 }, { time: 60, value: 6 },
                { time: 70, value: 5 }, { time: 90, value: 9 }
            ]
        },
        {
            type: 'label',
            payload: "\n        TODO!!!\n      "
        }
    ],
    'bufferWhen': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 1 }, { time: 20, value: 2 },
                { time: 40, value: 3 }, { time: 50, value: 4 },
                { time: 70, value: 5 }, { time: 90, value: 6 }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [{ time: 50, isLimit: true }]
        },
        {
            type: 'label',
            payload: "\n        observable.bufferWhen(() => {\n          return Observable.empty().delay(10)\n        });\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2, scheduler) {
                return input1.bufferWhen(function () { return input2; })
                    .take(10) // limit to 10
                    .map(function (items) { return items.map(function (item) { return item.value; }).join(','); });
            }
        }
    ],
    'concatMap': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 1 }, { time: 20, value: 2 },
                { time: 50, value: 4 }, { time: 90, value: 6 }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [{ time: 0, value: 'a' }, { time: 10, value: 'b' },
                { time: 20, value: 'c' }, { time: 30, isLimit: true }]
        },
        {
            type: 'label',
            payload: "\n        input1.concatMap((item) => {\n          return input2.map((item2) => item.value + item2.value);\n        });\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.concatMap(function (item) {
                    return input2.map(function (item2) {
                        return item.value + item2.value;
                    });
                });
            }
        }
    ],
    'concatMapTo': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 1 }, { time: 20, value: 2 },
                { time: 50, value: 4 }, { time: 90, value: 6 }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [{ time: 0, value: 'a' }, { time: 20, value: 'b' }, { time: 30, isLimit: true }]
        },
        {
            type: 'label',
            payload: "\n        input1.concatMapTo(input2)\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.concatMapTo(input2);
            }
        }
    ],
    'exhaustMap': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 1 }, { time: 20, value: 2 },
                { time: 50, value: 4 }, { time: 90, value: 6 }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [{ time: 0, value: 'a' }, { time: 20, value: 'b' }, { time: 30, isLimit: true }]
        },
        {
            type: 'label',
            payload: "\n        input1.exhaustMap((item1) =>\n          input2.map((item2) => item1.value + item2.value))\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.exhaustMap(function (item1) { return input2.map(function (item2) { return item1.value + item2.value; }); });
            }
        }
    ],
    'groupBy': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 }, { time: 10, value: 1 },
                { time: 20, value: 2 }, { time: 30, value: 3 },
                { time: 40, value: 4 }, { time: 50, value: 5 },
                { time: 60, value: 6 }, { time: 70, value: 7 },
                { time: 80, value: 8 }, { time: 90, value: 9 },
                { time: 100, value: 10 }
            ]
        },
        {
            type: 'label',
            payload: "\n        TODO: NEED SUPORT MULTIPLE OUTPUT\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1;
            }
        }
    ],
    'map': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 }, { time: 20, value: 1 },
                { time: 40, value: 2 }, { time: 60, value: 3 },
                { time: 80, value: 4 }, { time: 100, value: 5 }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.map( item =>  item.value * 10);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.map(function (item) { return item.value * 10; });
            }
        }
    ],
    'mapTo': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 }, { time: 20, value: 1 },
                { time: 40, value: 2 }, { time: 60, value: 3 },
                { time: 80, value: 4 }, { time: 100, value: 5 }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.mapTo('a');\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.mapTo('a');
            }
        }
    ],
    'mergeMap': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 }, { time: 20, value: 1 },
                { time: 40, value: 3 }, { time: 60, value: 4 }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 0, value: 'a' }, { time: 10, value: 'b' },
                { time: 20, isLimit: true }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.mergeMap((item1) => {\n          return input2.map(item2 => item1.value * item2.value);\n        });\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.mergeMap(function (item1) {
                    return input2.map(function (item2) { return item1.value + item2.value; });
                });
            }
        }
    ],
    'mergeMapTo': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 }, { time: 20, value: 1 },
                { time: 60, value: 3 }, { time: 80, value: 4 }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 0, value: 'a' }, { time: 10, value: 'b' },
                { time: 20, isLimit: true }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.mergeMapTo(input2)\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.mergeMapTo(input2);
            }
        }
    ],
    'mergeScan': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 20, value: 2 },
                { time: 40, value: 4 },
                { time: 60, value: 6 },
                { time: 80, value: 8 },
                { time: 100, value: 10 }
            ]
        },
        {
            type: 'label',
            payload: "\n        const seed = 1;\n        input1.map((item) => item.value)\n          .mergeScan((accumulatedValue, value) => {\n            return Observable.of(accumulatedValue + value);\n          }, seed);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                var seed = 1;
                return input1.map(function (item) { return item.value; }).mergeScan(function (accumulatedValue, value) {
                    return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of(accumulatedValue + value);
                }, seed);
            }
        }
    ],
    'pairwise': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 'a' },
                { time: 20, value: 'b' },
                { time: 40, value: 'c' },
                { time: 60, value: 'd' },
                { time: 80, value: 'e' },
                { time: 100, value: 'f' }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.pairwise().map(items => {\n          return items[0].value + ',' + items[1].value;\n        });\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.pairwise().map(function (items) {
                    return items[0].value + ',' + items[1].value;
                });
            }
        }
    ],
    'partition': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 20, value: 1 },
                { time: 40, value: 2 },
                { time: 60, value: 3 },
                { time: 80, value: 4 },
                { time: 100, value: 5 }
            ]
        },
        {
            type: 'label',
            payload: "\n        TODO: NEED SUPORT MULTIPLE OUTPUT\n      "
        }
    ],
    'pluck': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 10, value: 1 },
                { time: 20, value: 2 },
                { time: 30, value: 3 },
                { time: 40, value: 4 },
                { time: 50, value: 5 }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.pluck('value'); // item = {time: 0, value: 0}\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.pluck('value');
            }
        }
    ],
    'scan': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 20, value: 1 },
                { time: 40, value: 2 },
                { time: 60, value: 3 },
                { time: 80, value: 4 },
                { time: 100, value: 5 }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.pluck('value')\n          .scan((accumulatedValue, value) => accumulatedValue + value, 0);\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1) {
                return input1.pluck('value')
                    .scan(function (accumulatedValue, value) { return accumulatedValue + value; }, 0);
            }
        }
    ],
    'switchMap': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 30, value: 1 },
                { time: 40, value: 2 },
                { time: 60, value: 3 },
                { time: 90, value: 4 },
                { time: 100, value: 5 }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 0, value: 'a' }, { time: 10, value: 'b' },
                { time: 20, isLimit: true }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.switchMap((item1) => {\n            return input2.map((item2) => item1.value + item2.value);\n          });\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.switchMap(function (item1) {
                    return input2.map(function (item2) { return item1.value + item2.value; });
                });
            }
        }
    ],
    'switchMapTo': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 30, value: 1 },
                { time: 40, value: 2 },
                { time: 60, value: 3 },
                { time: 90, value: 4 },
                { time: 100, value: 5 }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 0, value: 'a' }, { time: 10, value: 'b' },
                { time: 20, isLimit: true }
            ]
        },
        {
            type: 'label',
            payload: "\n        input1.switchMap(input2)\n      "
        },
        {
            type: 'result',
            name: 'result1',
            payload: function (input1, input2) {
                return input1.switchMapTo(input2);
            }
        }
    ],
    'window': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 30, value: 1 },
                { time: 40, value: 2 },
                { time: 60, value: 3 },
                { time: 90, value: 4 },
                { time: 100, value: 5 }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 0, value: 'a' }, { time: 50, value: 'b' }
            ]
        },
        {
            type: 'label',
            payload: "\n        TODO: NEED SUPORT MULTIPLE OUTPUT\n      "
        }
    ],
    'windowCount': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 30, value: 1 },
                { time: 40, value: 2 },
                { time: 60, value: 3 },
                { time: 90, value: 4 },
                { time: 100, value: 5 }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 0, value: 'a' }, { time: 50, value: 'b' }
            ]
        },
        {
            type: 'label',
            payload: "\n        TODO: NEED SUPORT MULTIPLE OUTPUT\n      "
        }
    ],
    'windowTime': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 30, value: 1 },
                { time: 40, value: 2 },
                { time: 60, value: 3 },
                { time: 90, value: 4 },
                { time: 100, value: 5 }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 0, value: 'a' }, { time: 50, value: 'b' }
            ]
        },
        {
            type: 'label',
            payload: "\n        TODO: NEED SUPORT MULTIPLE OUTPUT\n      "
        }
    ],
    'windowToggle': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 30, value: 1 },
                { time: 40, value: 2 },
                { time: 60, value: 3 },
                { time: 90, value: 4 },
                { time: 100, value: 5 }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 0, value: 'a' }, { time: 50, value: 'b' }
            ]
        },
        {
            type: 'label',
            payload: "\n        TODO: NEED SUPORT MULTIPLE OUTPUT\n      "
        }
    ],
    'windowWhen': [
        {
            type: 'input',
            name: 'input1',
            payload: [
                { time: 0, value: 0 },
                { time: 30, value: 1 },
                { time: 40, value: 2 },
                { time: 60, value: 3 },
                { time: 90, value: 4 },
                { time: 100, value: 5 }
            ]
        },
        {
            type: 'input',
            name: 'input2',
            payload: [
                { time: 0, value: 'a' }, { time: 50, value: 'b' }
            ]
        },
        {
            type: 'label',
            payload: "\n        TODO: NEED SUPORT MULTIPLE OUTPUT\n      "
        }
    ]
};
/* harmony default export */ __webpack_exports__["a"] = (list);


/***/ }),

/***/ "../../../../../src/app/pages/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlexFill fxLayout=\"row\">\n  <div fxFlex=\"300px\">\n    <rm-sidebar></rm-sidebar>\n  </div>\n  <div fxFlex>\n    <rm-marble [marble]=\"marble\"></rm-marble>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__("../../../../../src/app/data/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.marble = [];
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.marble = [];
            if (__WEBPACK_IMPORTED_MODULE_2__data__["a" /* operators */][params.category]) {
                if (__WEBPACK_IMPORTED_MODULE_2__data__["a" /* operators */][params.category][params.operator]) {
                    _this.marble = __WEBPACK_IMPORTED_MODULE_2__data__["a" /* operators */][params.category][params.operator];
                }
            }
        });
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'rm-main',
            template: __webpack_require__("../../../../../src/app/pages/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map