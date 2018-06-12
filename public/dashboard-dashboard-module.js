(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" matchHeight=\"card\">\n  <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\n    <div class=\"card\">\n\n    </div>\n  </div>\n  <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\n    <div class=\"card\">\n\n    </div>\n  </div>\n  <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\n    <div class=\"card\">\n\n    </div>\n  </div>\n  <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\n    <div class=\"card\">\n\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\" matchHeight=\"card\">\n  <div class=\"col-lg-8 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">My Recent Files</h4>\n      </div>\n      <div class=\"card-body\">\n        <div id=\"donut-chart1\" class=\"height-250 donut1\">\n        </div>\n\n\n\n        <div class=\"card-block text-center\">\n          <span class=\"font-large-1 d-block mb-1\">5000</span>\n          <span class=\"primary font-medium-1\">Steps Today's Target</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-4 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header text-center pb-0\">\n        <span class=\"font-medium-2 danger\">Calories</span>\n        <h3 class=\"font-large-2 mt-1\">4,025\n          <span class=\"font-medium-1 grey darken-1 text-bold-400\">kcal</span>\n        </h3>\n      </div>\n      <div class=\"card-body\">\n        <div id=\"donut-chart3\" class=\"height-250 donut3\">\n          <!-- <x-chartist [data]=\"DonutChart3.data\" [type]=\"DonutChart3.type\" [options]=\"DonutChart3.options\" [responsiveOptions]=\"DonutChart3.responsiveOptions\"\n                        [events]=\"DonutChart3.events\">\n                    </x-chartist> -->\n        </div>\n        <div class=\"card-block text-center\">\n          <span class=\"font-large-1 d-block mb-1\">5000</span>\n          <span class=\"danger font-medium-1\">kcla Today's Target</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\" matchHeight=\"card\">\n  <div class=\"col-xl-4 col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title mb-0\">Discover People</h4>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-block\">\n          <div class=\"media mb-3\">\n            <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-12.png\">\n            <div class=\"media-body\">\n              <h4 class=\"font-medium-1 mt-2 mb-0\">Jessica Rice</h4>\n            </div>\n            <a class=\"d-flex ml-3 btn btn-raised btn-round gradient-blackberry py-2 width-150 justify-content-center white\">Following</a>\n          </div>\n          <div class=\"media mb-3\">\n            <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-danger height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-11.png\">\n            <div class=\"media-body\">\n              <h4 class=\"font-medium-1 mt-2 mb-0\">Jacob Rios</h4>\n            </div>\n            <a class=\"d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center\">Follow</a>\n          </div>\n          <div class=\"media mb-3\">\n            <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-success height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-3.png\">\n            <div class=\"media-body\">\n              <h4 class=\"font-medium-1 mt-2 mb-0\">Russell Diaz</h4>\n            </div>\n            <a class=\"d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center\">Follow</a>\n          </div>\n          <div class=\"media mb-3\">\n            <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-warning height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-6.png\">\n            <div class=\"media-body\">\n              <h4 class=\"font-medium-1 mt-2 mb-0\">Sara Bell</h4>\n            </div>\n            <a class=\"d-flex ml-3 btn btn-raised btn-round gradient-blackberry py-2 width-150 justify-content-center white\">Following</a>\n          </div>\n          <div class=\"media mb-3\">\n            <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-info height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-18.png\">\n            <div class=\"media-body\">\n              <h4 class=\"font-medium-1 mt-2 mb-0\">Janet Lucas</h4>\n            </div>\n            <a class=\"d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center\">Follow</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-8 col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title mb-0\">Sales Analysis</h4>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-block\">\n          <div class=\"chart-info mb-3\">\n            <span class=\"text-uppercase mr-3\">\n              <i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Sales</span>\n            <span class=\"text-uppercase mr-3\">\n              <i class=\"fa fa-circle warning font-small-2 mr-1\"></i> Visits</span>\n            <span class=\"text-uppercase\">\n              <i class=\"fa fa-circle danger font-small-2 mr-1\"></i> clicks</span>\n          </div>\n          <div id=\"line-chart1\" class=\"height-350 lineChart1 lineChart1Shadow\">\n            <!-- <x-chartist class=\"\" [data]=\"lineChart1.data\" [type]=\"lineChart1.type\" [options]=\"lineChart1.options\"\n                            [responsiveOptions]=\"lineChart1.responsiveOptions\" [events]=\"lineChart1.events\">\n                        </x-chartist> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row mb-3\" matchHeight=\"card\">\n  <div class=\"col-xl-4 col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"card-block\">\n          <div class=\"row d-flex mb-3 py-2\">\n            <div class=\"col align-self-center text-center\">\n              <i class=\"icon-graph font-large-2 blue-grey lighten-2\"></i>\n            </div>\n            <div class=\"col align-self-center\">\n              <img alt=\"96x96\" class=\"bg-danger width-150 rounded-circle img-fluid\" src=\"assets/img/portrait/small/avatar-s-11.png\">\n            </div>\n            <div class=\"col align-self-center text-center\">\n              <i class=\"icon-envelope font-large-2 blue-grey lighten-2\"></i>\n            </div>\n          </div>\n          <h3 class=\"font-large-1 text-center\">Kevin Sullivan</h3>\n          <span class=\"font-medium-1 grey d-block text-center\">UX Designer</span>\n          <div class=\"row mt-4 mb-3\">\n            <div class=\"col-xl-7 col-8 \">\n              <div id=\"Widget-line-chart1\" class=\"height-75 WidgetlineChart1 WidgetlineChart1Shadow px-2\">\n                <!-- <x-chartist class=\"\" [data]=\"WidgetlineChart1.data\" [type]=\"WidgetlineChart1.type\" [options]=\"WidgetlineChart1.options\" [responsiveOptions]=\"WidgetlineChart1.responsiveOptions\"\n                                    [events]=\"WidgetlineChart1.events\">\n                                </x-chartist> -->\n              </div>\n            </div>\n            <div class=\"col-xl-5 col-4\">\n              <span class=\"font-large-1\">\n                <i class=\"fa fa-caret-up font-large-2 success\"></i> 27 %</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"card-img\">\n          <!-- <ngb-carousel>\n                        <ng-template ngbSlide>\n                            <img src=\"assets/img/photos/17.jpg\" alt=\"Random first slide\">\n                            <div class=\"carousel-caption\">\n                                <h3>First slide label</h3>\n                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"assets/img/photos/13.jpg\" alt=\"Random second slide\">\n                            <div class=\"carousel-caption\">\n                                <h3>Second slide label</h3>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"assets/img/photos/12.jpg\" alt=\"Random third slide\">\n                            <div class=\"carousel-caption\">\n                                <h3>Third slide label</h3>\n                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n                            </div>\n                        </ng-template>\n                    </ngb-carousel> -->\n          <a class=\"btn btn-floating halfway-fab btn-large gradient-blackberry\">\n            <i class=\"ft-plus\"></i>\n          </a>\n        </div>\n        <div class=\"card-block mt-3\">\n          <h4 class=\"card-title\">Card title</h4>\n          <p class=\"card-text\">Sweet halvah dragée jelly-o halvah carrot cake oat cake. Donut jujubes jelly chocolate cake.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">Earnings</h4>\n        <span class=\"grey\">Mon 18 - Sun 21</span>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-block\">\n          <div class=\"earning-details mb-4\">\n            <h3 class=\"font-large-2 mb-1\">$4295.36\n              <i class=\"ft-arrow-up font-large-2 teal accent-3\"></i>\n            </h3>\n            <span class=\"font-medium-1 grey d-block\">Total Earnings</span>\n          </div>\n          <div id=\"Widget-line-chart2\" class=\"height-100 WidgetlineChart2 WidgetlineChart2Shadow\">\n            <!-- <x-chartist class=\"\" [data]=\"WidgetlineChart2.data\" [type]=\"WidgetlineChart2.type\" [options]=\"WidgetlineChart2.options\" [responsiveOptions]=\"WidgetlineChart2.responsiveOptions\"\n                            [events]=\"WidgetlineChart2.events\">\n                        </x-chartist> -->\n          </div>\n          <div class=\"action-buttons mt-4 mb-1 text-center\">\n            <a class=\"btn btn-raised gradient-blackberry py-2 px-4 white mr-2\">View Full</a>\n            <a class=\"btn btn-raised btn-outline-grey py-2 px-3\">Print</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_4__["MatchHeightModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/shared/directives/match-height.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/match-height.directive.ts ***!
  \*************************************************************/
/*! exports provided: MatchHeightDirective, MatchHeightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightDirective", function() { return MatchHeightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightModule", function() { return MatchHeightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatchHeightDirective = /** @class */ (function () {
    function MatchHeightDirective(el) {
        this.el = el;
        console.log("Match height directive");
    }
    MatchHeightDirective.prototype.ngAfterViewChecked = function () {
        // call our matchHeight function here
        this.matchHeights(this.el.nativeElement, this.matchHeight);
    };
    MatchHeightDirective.prototype.matchHeights = function (parent, className) {
        // match height logic here
        if (!parent)
            return;
        // step 1: find all the child elements with the selected class name
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // step 2a: get all the child elements heights
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // step 2b: find out the tallest
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // step 3: update all the child elements to the tallest height
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here
        this.matchHeights(this.el.nativeElement, this.matchHeight);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MatchHeightDirective.prototype, "matchHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatchHeightDirective.prototype, "onResize", null);
    MatchHeightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[matchHeight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MatchHeightDirective);
    return MatchHeightDirective;
}());

var MatchHeightModule = /** @class */ (function () {
    function MatchHeightModule() {
    }
    MatchHeightModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [MatchHeightDirective],
            exports: [MatchHeightDirective]
        })
    ], MatchHeightModule);
    return MatchHeightModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map