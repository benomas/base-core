webpackJsonp([1,5],{

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_framework__ = __webpack_require__(592);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AngularComponent = (function () {
    function AngularComponent() {
    }
    AngularComponent.prototype.setAngularInstance = function () {
        this.angularInstance = new __WEBPACK_IMPORTED_MODULE_1__angular_framework__["a" /* AngularFramework */]();
        this.angularInstance.id = 1;
        this.angularInstance.programingLenguage = 'javascript';
        this.angularInstance.name = 'Angular 2.4';
        this.angularInstance.description = 'One framework. Mobile & desktop.';
        this.angularInstance.status = true;
        this.angularInstance.sourceUrl = 'https=//angular.io/';
        this.angularInstance.type = 'front-end';
        this.angularInstance.ext = 'js';
        this.angularInstance.sourceUrl = 'file/angular.png';
        this.angularInstance.angularProperty1 = 'angular property 1';
        this.angularInstance.angularProperty2 = 'angular property 2';
        this.angularInstance.angularProperty3 = 'angular property 3';
    };
    AngularComponent.prototype.ngOnInit = function () {
        this.setAngularInstance();
    };
    AngularComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'angular',
            template: __webpack_require__(663),
            styles: [__webpack_require__(657)]
        }), 
        __metadata('design:paramtypes', [])
    ], AngularComponent);
    return AngularComponent;
}());
//# sourceMappingURL=C:/www/base-core/front-end-engine/src/angular.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_caller_service__ = __webpack_require__(593);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiTestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiTestComponent = (function () {
    //constructor(private apiCallerService: ApiCallerService) {}
    function ApiTestComponent(http) {
        this.http = http;
        this.mode = 'Observable';
        this.apiCallerService = new __WEBPACK_IMPORTED_MODULE_2__api_caller_service__["a" /* ApiCallerService */](this.http);
    }
    ApiTestComponent.prototype.ngOnInit = function () {
    };
    ApiTestComponent.prototype.callApi = function (apiObject, apiAction, apiParam) {
        var _this = this;
        this.apiResponse = '';
        if (typeof apiObject !== 'undefined' && apiObject && apiObject !== '' &&
            typeof apiAction !== 'undefined' && apiAction && apiAction !== '' &&
            typeof apiParam !== 'undefined' && apiParam && apiParam !== '') {
            this.apiCallerService
                .getTest(apiObject, apiAction, apiParam).subscribe(function (apiResponse) { _this.apiResponse = JSON.stringify(apiResponse); }, function (error) { return _this.errorMessage = error; });
        }
        else
            alert('No se han definido los campos necesarios');
    };
    ApiTestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-api-test',
            template: __webpack_require__(664),
            styles: [__webpack_require__(658)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ApiTestComponent);
    return ApiTestComponent;
    var _a;
}());
//# sourceMappingURL=C:/www/base-core/front-end-engine/src/api-test.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__laravel_framework__ = __webpack_require__(597);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaravelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LaravelComponent = (function () {
    function LaravelComponent() {
    }
    LaravelComponent.prototype.setLaravelInstance = function () {
        this.laravelInstance = new __WEBPACK_IMPORTED_MODULE_1__laravel_framework__["a" /* LaravelFramework */]();
        this.laravelInstance.id = 2;
        this.laravelInstance.programingLenguage = 'php';
        this.laravelInstance.name = 'Laravel 5.4';
        this.laravelInstance.description = 'The PHP Framework For Web Artisans';
        this.laravelInstance.status = true;
        this.laravelInstance.sourceUrl = 'https://laravel.com/';
        this.laravelInstance.type = 'back-end';
        this.laravelInstance.ext = 'php';
        this.laravelInstance.sourceUrl = 'file/laravel.png';
        this.laravelInstance.laravelProperty1 = 'laravel property 1';
        this.laravelInstance.laravelProperty2 = 'laravel property 2';
        this.laravelInstance.laravelProperty3 = 'laravel property 3';
    };
    LaravelComponent.prototype.ngOnInit = function () {
        this.setLaravelInstance();
    };
    LaravelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'laravel',
            template: __webpack_require__(666),
            styles: [__webpack_require__(660)]
        }), 
        __metadata('design:paramtypes', [])
    ], LaravelComponent);
    return LaravelComponent;
}());
//# sourceMappingURL=C:/www/base-core/front-end-engine/src/laravel.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__(667),
            styles: [__webpack_require__(661)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=C:/www/base-core/front-end-engine/src/not-found.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramingLanguageFramework; });
var ProgramingLanguageFramework = (function () {
    function ProgramingLanguageFramework() {
    }
    return ProgramingLanguageFramework;
}());
//# sourceMappingURL=C:/www/base-core/front-end-engine/src/programing-language-framework.js.map

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 428;


/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(595);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/www/base-core/front-end-engine/src/main.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__programing_language_framework__ = __webpack_require__(401);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularFramework; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var AngularFramework = (function (_super) {
    __extends(AngularFramework, _super);
    function AngularFramework() {
        _super.apply(this, arguments);
    }
    return AngularFramework;
}(__WEBPACK_IMPORTED_MODULE_0__programing_language_framework__["a" /* ProgramingLanguageFramework */]));
//# sourceMappingURL=C:/www/base-core/front-end-engine/src/angular-framework.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiCallerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiCallerService = (function () {
    function ApiCallerService(http) {
        this.http = http;
        this.apiUrl = 'api'; // URL to web api
    }
    ApiCallerService.prototype.getTest = function (object, action, param) {
        var url = this.apiUrl + "/" + object + "/" + action + "/" + param;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiCallerService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || body || {};
    };
    ApiCallerService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ApiCallerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ApiCallerService);
    return ApiCallerService;
    var _a;
}());
//# sourceMappingURL=C:/www/base-core/front-end-engine/src/api-caller.service.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Base "laravel 5.4/Angular 2.4"';
        this.levels = [{ "label": "Angular 2.4", "route": "angular" },
            { "label": "Laravel 5.4", "route": "laravel" },
            { "label": "Probar api", "route": "api-test" }];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(665),
            styles: [__webpack_require__(659)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/www/base-core/front-end-engine/src/app.component.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__front_routing_front_routing_module__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__laravel_laravel_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_angular_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_test_api_test_component__ = __webpack_require__(398);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__laravel_laravel_component__["a" /* LaravelComponent */],
                __WEBPACK_IMPORTED_MODULE_9__angular_angular_component__["a" /* AngularComponent */],
                __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_11__api_test_api_test_component__["a" /* ApiTestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__front_routing_front_routing_module__["a" /* FrontRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/www/base-core/front-end-engine/src/app.module.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_angular_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__laravel_laravel_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_test_api_test_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__ = __webpack_require__(400);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var home = { "path": "angular", "label": "Angular" };
var routes = [
    { path: '', redirectTo: home.path, pathMatch: 'full' },
    { path: home.path, component: __WEBPACK_IMPORTED_MODULE_3__angular_angular_component__["a" /* AngularComponent */] },
    { path: 'laravel', component: __WEBPACK_IMPORTED_MODULE_4__laravel_laravel_component__["a" /* LaravelComponent */] },
    { path: 'api-test', component: __WEBPACK_IMPORTED_MODULE_5__api_test_api_test_component__["a" /* ApiTestComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var FrontRoutingModule = (function () {
    function FrontRoutingModule() {
    }
    FrontRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            declarations: []
        }), 
        __metadata('design:paramtypes', [])
    ], FrontRoutingModule);
    return FrontRoutingModule;
}());
//# sourceMappingURL=C:/www/base-core/front-end-engine/src/front-routing.module.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__programing_language_framework__ = __webpack_require__(401);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaravelFramework; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var LaravelFramework = (function (_super) {
    __extends(LaravelFramework, _super);
    function LaravelFramework() {
        _super.apply(this, arguments);
    }
    return LaravelFramework;
}(__WEBPACK_IMPORTED_MODULE_0__programing_language_framework__["a" /* ProgramingLanguageFramework */]));
//# sourceMappingURL=C:/www/base-core/front-end-engine/src/laravel-framework.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/www/base-core/front-end-engine/src/environment.js.map

/***/ }),

/***/ 657:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 658:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 30rem;\">\n  <img class=\"card-img-top rounded mx-auto d-block\" [src]=\"angularInstance.sourceUrl\" alt=\"Card image cap\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">Vista de ejemplo con información de Angular 2.4</h4>\n     <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">\n          Id:\n        <b>\n          {{angularInstance.id}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Nombre:\n        <b>\n          {{angularInstance.name}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Descripción:\n        <b>\n          {{angularInstance.description}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Estatus:\n        <b>\n          {{angularInstance.status}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Tipo:\n        <b>\n          {{angularInstance.type}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Extensión:\n        <b>\n          {{angularInstance.ext}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Propiedad 1:\n        <b>\n          {{angularInstance.angularProperty1}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Propiedad 2:\n        <b>\n          {{angularInstance.angularProperty2}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Propiedad 3:\n        <b>\n          {{angularInstance.angularProperty3}}\n        </b>\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <label for=\"object\">Primer segmento</label>\n    <input  #apiObject id=\"api-object\" class=\"form-control\"  placeholder=\"Objeto\">\n</div>\n<div class=\"form-group\">\n    <label for=\"action\">Segundo segmento</label>\n    <input  #apiAction id=\"api-action\" class=\"form-control\"  placeholder=\"Acción\">\n</div>\n<div class=\"form-group\">\n    <label for=\"param\">Tercer segmento</label>\n    <input  #apiParam id=\"api-param\" class=\"form-control\"  placeholder=\"Parametro\">\n</div>\n<div class=\"alert alert-info\" role=\"alert\">\n  <strong>Ejemplo de url de api:</strong> raiz/api/objeto/accion/parametro\n</div>\n<button class=\"btn btn-outline-success\" (click)=\"callApi(apiObject.value,apiAction.value,apiParam.value)\">\n    LLamar api\n</button>\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"apiResponse\">\n  <h4 class=\"alert-heading\">Respuesta de api:</h4>\n  <p><b>{{apiResponse}}</b></p>\n</div>\n"

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <p class=\"h1\">{{title}}</p>\n      <ul class=\"nav nav-tabs\" role=\"tablist\">\n        <li class=\"nav-item\" *ngFor=\"let level of levels\">\n          <a routerLink=\"{{level.route}}\" routerLinkActive=\"active\" class=\"nav-link\">\n            {{level.label}}\n          </a>\n        </li>\n      </ul>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 30rem;\">\n  <img class=\"card-img-top rounded mx-auto d-block\" [src]=\"laravelInstance.sourceUrl\" alt=\"Card image cap\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">Vista de ejemplo con información de Laravel 5.4</h4>\n     <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">\n          Id:\n        <b>\n          {{laravelInstance.id}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Nombre:\n        <b>\n          {{laravelInstance.name}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Descripción:\n        <b>\n          {{laravelInstance.description}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Estatus:\n        <b>\n          {{laravelInstance.status}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Tipo:\n        <b>\n          {{laravelInstance.type}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Extensión:\n        <b>\n          {{laravelInstance.ext}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Propiedad 1:\n        <b>\n          {{laravelInstance.laravelProperty1}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Propiedad 2:\n        <b>\n          {{laravelInstance.laravelProperty2}}\n        </b>\n      </li>\n      <li class=\"list-group-item\">\n          Propiedad 3:\n        <b>\n          {{laravelInstance.laravelProperty3}}\n        </b>\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "<h2>Page not found</h2>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(429);


/***/ })

},[699]);
//# sourceMappingURL=main.bundle.map