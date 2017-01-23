webpackJsonp([0,4],{

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SurveyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SurveyService = (function () {
    function SurveyService(http) {
        this.http = http;
        this.colours = { BackgroundColour: "", RightPanelColour: "bg-white" };
        this.colourSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.currentProjectFollowedData = null;
        this.currentProjectFollowedDataSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        myHeaders.append('Accept', 'q=0.8;application/json;q=0.9'); //This was needed for firefox, because apparently it doesn't add the "Accept application/json" header automatically
        myHeaders.set('Content-Type', 'application/json');
        // myHeaders.set('authenticationToken', this.Token);
        this._requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: myHeaders
        });
        this._apiUrl = "https://spacehivedevapi.azurewebsites.net";
        this._lastStepCompleted = 0;
        this._impactList = [
            { Id: 1, Name: "makes the area safer", Selected: false },
            { Id: 2, Name: "makes the area greener", Selected: false },
            { Id: 3, Name: "brings people together", Selected: false },
            { Id: 4, Name: "provides more things to do", Selected: false },
            { Id: 5, Name: "helps my business", Selected: false },
            { Id: 6, Name: "helps the local economy", Selected: false },
            { Id: 7, Name: "makes the area more attractive", Selected: false },
            { Id: 8, Name: "boots the value of my property", Selected: false },
            { Id: 9, Name: "makes the area more fun", Selected: false },
            { Id: 10, Name: "adds character to the area", Selected: false },
            { Id: 11, Name: "makes the area more family friendly", Selected: false },
        ];
        this._supportWays = [
            { Id: 1, Name: "I provided advice", Selected: false },
            { Id: 2, Name: "I gave stuff in-kind", Selected: false },
            { Id: 3, Name: "I volunteered", Selected: false }];
    }
    SurveyService.prototype.completeSurvey = function (data) {
        var url = this._apiUrl + "/api/projects/FinishSurvey";
        var dataToPost = { Data: data, Token: this._token };
        return this.http.post(url, dataToPost, this._requestOptions)
            .map(function (res) { return res.json(); });
    };
    SurveyService.prototype.getProjectFollowedData = function (token) {
        this._token = token;
        var url = this._apiUrl + "/api/projects/FollowedSurveyData/" + token;
        return this.http.get(url, this._requestOptions)
            .map(function (res) { return res.json(); });
    };
    SurveyService.prototype.getToken = function () {
        return this._token;
    };
    SurveyService.prototype.PreviousStepsCompleted = function (step) {
        if (step > 1) {
            return this._lastStepCompleted == step - 1;
        }
        else
            return true;
    };
    SurveyService.prototype.SetLastStepCompleted = function (step) {
        this._lastStepCompleted = step;
    };
    SurveyService.prototype.getImpactList = function () {
        return this._impactList;
    };
    SurveyService.prototype.getSupportWays = function () {
        return this._supportWays;
    };
    SurveyService.prototype.setColours = function (colours) {
        this.colours = colours;
        this.colourSubject.next(this.colours);
    };
    SurveyService.prototype.setColourValue = function (item, propName) {
        this.colours[propName] = item;
        this.colourSubject.next(this.colours);
    };
    SurveyService.prototype.getColour = function () {
        return this.colourSubject.asObservable();
    };
    SurveyService.prototype.setProjectFollowerData = function (projectFollowedData) {
        this.currentProjectFollowedData = projectFollowedData;
        this.currentProjectFollowedDataSubject.next(this.currentProjectFollowedData);
    };
    SurveyService.prototype.getProjectFollowerData = function () {
        return this.currentProjectFollowedDataSubject.asObservable();
    };
    SurveyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], SurveyService);
    return SurveyService;
    var _a;
}());
//# sourceMappingURL=C:/testprojects/surveyAngular2/src/survey.service.js.map

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_survey_service__ = __webpack_require__(172);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProjectSurveyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectSurveyComponent = (function () {
    function ProjectSurveyComponent(route, surveyService) {
        this.surveyService = surveyService;
        this.showFader = true;
        this.BackgroundRightPanelClass = "bg-white";
        this.Visible = false;
        this.Test = route.snapshot.params['token'];
        this.IsMain = true;
    }
    ;
    ProjectSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.surveyService.colourSubject.subscribe(function (item) {
            _this.BackgroundRightPanelClass = item.RightPanelColour;
            ;
        });
        this.surveyService.getProjectFollowedData(this.Test).subscribe(function (data) {
            _this.ProjectFollowedData = data;
            _this.surveyService.setProjectFollowerData(data);
            document.title = "Backers survey for " + data.ProjectName;
        }, function (err) {
            console.log('error');
            // toastr.options = { "timeOut": "3000" };
            // toastr['error']('A problem has occurred. Please try again or contact support@spacehive.com for support.', 'Error');
        });
    };
    ;
    ProjectSurveyComponent.prototype.Test1 = function () {
        this.IsMain = false;
    };
    ProjectSurveyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "project-survey",
            template: __webpack_require__(724)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_survey_service__["a" /* SurveyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_survey_service__["a" /* SurveyService */]) === 'function' && _b) || Object])
    ], ProjectSurveyComponent);
    return ProjectSurveyComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/testprojects/surveyAngular2/src/project-survey.component.js.map

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_survey_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(242);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Step1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Step1Component = (function () {
    function Step1Component(_surveyService, router) {
        this._surveyService = _surveyService;
        this.router = router;
        this.LastStepCompleted = 0;
    }
    ;
    Step1Component.prototype.ngOnInit = function () {
        this.CurrentProjectFollowedData = this._surveyService.currentProjectFollowedData;
        this.SurveyData = {
            ImpactList: this._surveyService.getImpactList(),
            FeelsLike: "1",
            FeelsMorePower: "1",
            MeetNewPeople: false,
            NumberNewFriends: 0,
            NumberNewPeople: 0,
            MadeNewFriends: false,
            VisitProject: false,
            TimesVisited: 1,
            SupportOtherWay: this._surveyService.getSupportWays(),
            ProjectMeansText: "",
            ProjectId: this.CurrentProjectFollowedData.ProjectId,
            ProjectName: this.CurrentProjectFollowedData.ProjectName,
            UserId: this.CurrentProjectFollowedData.UserId,
            UserName: this.CurrentProjectFollowedData.UserName,
            PledgeAmount: this.CurrentProjectFollowedData.PledgeAmount
        };
        this.displayErrors = false;
        this._surveyService.setColourValue("bg-purple2", "BackgroundColour");
    };
    Step1Component.prototype.goToStep = function (step, form) {
        //console.log(this.CurrentProjectFollowedData);
        if (form == null || form.valid) {
            this.LastStepCompleted = step;
            if (step == 3) {
                this._surveyService.setColourValue("bg-yellow", "BackgroundColour");
            }
            if (step == 6) {
                this._surveyService.setColourValue("bg-gray-lighter", "BackgroundColour");
                this._surveyService.setColourValue("bg-purple2", "RightPanelColour");
            }
            if (step > 5) {
                this.displayErrors = false;
                var stringToPost = JSON.stringify(this.SurveyData);
                //stringToPost = stringToPost.replace(/"/g,"'");
                var dataToPost = { Data: stringToPost, Token: this._surveyService.getToken() };
                this._surveyService.completeSurvey(stringToPost).subscribe(function (data) {
                    console.log(data);
                }, function (err) {
                    console.log('error');
                    // toastr.options = { "timeOut": "3000" };
                    // toastr['error']('A problem has occurred. Please try again or contact support@spacehive.com for support.', 'Error');
                });
            }
        }
        else {
            this.displayErrors = true;
        }
    };
    Step1Component.prototype.checkedImpactAreas = function (form) {
        form.controls["hiddenFilledImpactArea"].markAsTouched();
    };
    ;
    Step1Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-survey-step1',
            template: __webpack_require__(725)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_survey_service__["a" /* SurveyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_survey_service__["a" /* SurveyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], Step1Component);
    return Step1Component;
    var _a, _b;
}());
//# sourceMappingURL=C:/testprojects/surveyAngular2/src/step1.component.js.map

/***/ },

/***/ 433:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 433;


/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(556);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/testprojects/surveyAngular2/src/main.js.map

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_project_survey_project_survey_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_project_survey_step1_step1_component__ = __webpack_require__(364);
/* unused harmony export AppRoutingRoutingModule */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    {
        path: 'completeSurvey/:token',
        component: __WEBPACK_IMPORTED_MODULE_2__components_project_survey_project_survey_component__["a" /* ProjectSurveyComponent */],
        children: [
            {
                path: 'step1',
                component: __WEBPACK_IMPORTED_MODULE_3__components_project_survey_step1_step1_component__["a" /* Step1Component */]
            }
        ]
    },
    {
        path: 'completeSurvey',
        component: __WEBPACK_IMPORTED_MODULE_2__components_project_survey_project_survey_component__["a" /* ProjectSurveyComponent */],
    },
    {
        path: '',
        redirectTo: 'completeSurvey',
        pathMatch: 'full'
    }
];
var AppRoutingRoutingModule = (function () {
    function AppRoutingRoutingModule() {
    }
    AppRoutingRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingRoutingModule);
    return AppRoutingRoutingModule;
}());
var routing = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=C:/testprojects/surveyAngular2/src/app-routing-routing.module.js.map

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_survey_service__ = __webpack_require__(172);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
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
    function AppComponent(surveyService) {
        this.surveyService = surveyService;
        this.BackgroundColourClass = "bg-gray-lighter";
        this.Visible = false;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var subscription = this.surveyService.colourSubject.subscribe(function (item) {
            _this.BackgroundColourClass = item.BackgroundColour;
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(723),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_survey_service__["a" /* SurveyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_survey_service__["a" /* SurveyService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/testprojects/surveyAngular2/src/app.component.js.map

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_app_routing_routing_module__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_survey_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_project_survey_project_survey_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_project_survey_step1_step1_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_bootstrap_switch_directive__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_media_element_player_directive__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_validation_errors_directive__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_filter_pipe__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_filter_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_filter_pipe__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_project_survey_project_survey_component__["a" /* ProjectSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_project_survey_step1_step1_component__["a" /* Step1Component */],
                __WEBPACK_IMPORTED_MODULE_9__directives_bootstrap_switch_directive__["a" /* BootstrapSwitchDirective */],
                __WEBPACK_IMPORTED_MODULE_10__directives_media_element_player_directive__["a" /* MediaElementPlayerDirective */],
                __WEBPACK_IMPORTED_MODULE_11__directives_validation_errors_directive__["a" /* DisplayValidationErrors */], __WEBPACK_IMPORTED_MODULE_12_ng2_filter_pipe__["Ng2FilterPipe"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_app_routing_routing_module__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_survey_service__["a" /* SurveyService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/testprojects/surveyAngular2/src/app.module.js.map

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BootstrapSwitchDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BootstrapSwitchDirective = (function () {
    function BootstrapSwitchDirective(el) {
        this.ngModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.element = el;
        var _this = this;
        $(el.nativeElement).bootstrapSwitch({
            onColor: "success",
            onText: "Yes",
            offColor: "danger",
            offText: "No",
            onSwitchChange: function (event, state) {
                var $element = $(event.currentTarget);
                var isChecked = $element.is(':checked');
                _this.ngModel = isChecked;
                _this.ngModelChange.emit(_this.ngModel);
            }
        });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BootstrapSwitchDirective.prototype, "ngModel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], BootstrapSwitchDirective.prototype, "ngModelChange", void 0);
    BootstrapSwitchDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '.sh-bootstrap-switch'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], BootstrapSwitchDirective);
    return BootstrapSwitchDirective;
    var _a;
}());
//# sourceMappingURL=C:/testprojects/surveyAngular2/src/bootstrap-switch.directive.js.map

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MediaElementPlayerDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MediaElementPlayerDirective = (function () {
    function MediaElementPlayerDirective(el) {
        this.element = el;
    }
    MediaElementPlayerDirective.prototype.ngAfterContentChecked = function () {
        new MediaElementPlayer('#' + this.element.nativeElement.id, {
            pauseOtherPlayers: true,
            hideVideoControlsOnLoad: true
        });
    };
    MediaElementPlayerDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '.sh-mediaelementplayer'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], MediaElementPlayerDirective);
    return MediaElementPlayerDirective;
    var _a;
}());
//# sourceMappingURL=C:/testprojects/surveyAngular2/src/media-element-player.directive.js.map

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DisplayValidationErrors; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisplayValidationErrors = (function () {
    function DisplayValidationErrors(el, renderer) {
        this.errorValueChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.animateShockIfInvalid = function (elem) {
            var elemName = elem.id;
            var parentElem = elem.parentElement;
            if (this.form && !this.form.controls[elemName].valid) {
                parentElem.classList.add("validation-shock");
                this.renderer.listen(parentElem, 'transitionend', function (event) {
                    parentElem.classList.remove("validation-shock");
                });
            }
        };
        this.element = el;
        this.renderer = renderer;
    }
    DisplayValidationErrors.prototype.ngOnChanges = function (changes) {
        var errors = changes['displayErrors'];
        if (errors && !errors.isFirstChange() && this.element.nativeElement && errors.currentValue === true) {
            var inputSelector = 'input[type="text"], input.validateHidden, ckeditor, input[type="password"], input[type="date"], input[type="time"], input[type="number"], input[type="email"], input[type="radio"], input[type="checkbox"], input[type="tel"], select, textarea, .selectize-control';
            var inputElements = $(this.element.nativeElement).find(inputSelector);
            for (var i = 0; i < inputElements.length; i++) {
                var el = inputElements[i];
                var id = el.getAttribute('id');
                var control = this.form.controls[id];
                if (control) {
                    control.markAsTouched();
                    el.classList.toggle('has-error');
                    if (!control.valid) {
                        this.animateShockIfInvalid(el);
                    }
                }
            }
            var $firstErrorElement = inputElements.filter('.ng-invalid').first();
            var _this = this;
            if ($firstErrorElement && $firstErrorElement.length) {
                setTimeout(function () {
                    var offsetAdjust = 58; // not sure why: jquery reports 58 pixels to few in this case
                    console.log($firstErrorElement.closest('div.form-group'));
                    $('body').animate({
                        scrollTop: $firstErrorElement.closest('div.form-group').offset().top - offsetAdjust
                    }, {
                        duration: 300,
                        complete: function () {
                            toastr.options = { "timeOut": "3000" };
                            toastr['error']('You have errors in your form');
                        }
                    });
                    $firstErrorElement.focus();
                    _this.errorValueChanged.emit(false);
                }, 100);
            }
        }
    };
    DisplayValidationErrors = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[displayErrors]',
            inputs: ['form: error-form', 'displayErrors'],
            outputs: ['errorValueChanged'] // this is the same like doing @Output('errorValueChanged')
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _b) || Object])
    ], DisplayValidationErrors);
    return DisplayValidationErrors;
    var _a, _b;
}());
//# sourceMappingURL=C:/testprojects/surveyAngular2/src/validation-errors.directive.js.map

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/testprojects/surveyAngular2/src/environment.js.map

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(993);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/testprojects/surveyAngular2/src/polyfills.js.map

/***/ },

/***/ 719:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 723:
/***/ function(module, exports) {

module.exports = "\n<div class=\"{{BackgroundColourClass}} parentContainer padding-top3\">\n\t<div class=\"container\">\n\n\t\t<router-outlet></router-outlet>\n\n\t</div>\n</div>"

/***/ },

/***/ 724:
/***/ function(module, exports) {

module.exports = "<div class=\"row sh-hives sh-projectFollowerSurvey\">\n\t<div class=\"col-sm-4\" *ngIf=\"ProjectFollowedData\">\n\t\t<div class=\"padding1 lg\" [ngClass]=\"{'bg-white': IsMain,'green13': !IsMain, 'white': !IsMain }\">\n\t\t\t<p class=\"bold\" *ngIf=\"IsMain\">Hi {{ProjectFollowedData.UserName}}!</p>\n\t\t\t<p class=\"margin-top2\">\n\t\t\t{{ProjectFollowedData.TimeAgo}} you pledged £{{ProjectFollowedData.PledgeAmount}} to <a [ngClass]=\"{'yellow': !IsMain}\" href=\"https://www.spacehive.com/{{ProjectFollowedData.ProjectUrl}}\">{{ProjectFollowedData.ProjectName}}</a> and on {{ProjectFollowedData.DateFounded | date: 'dd MMMM yyyy'}} the project hit its crowdfunding target! </p>\n\t\t\t<div *ngIf=\"IsMain\">\n\t\t\t\t<p class=\"margin-top2\">Please take this short survey to let us know how this project has made an impact on you and your area.</p>\n\t\t\t\t<a href=\"\" class=\"btn btn-primary marked margin-top2 bold\" [routerLink]=\"['step1']\" (click)=\"Test1()\" >START SURVEY</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<img src=\"{{ProjectFollowedData.ProjectPicture.Url}}\" *ngIf=\"!IsMain\" width=\"100%\">\n\t</div>\n\t<div class=\"col-sm-8\" *ngIf=\"ProjectFollowedData\">\n\n\t\t<div *ngIf=\"IsMain\" >\n\t\t\t<img src=\"{{ProjectFollowedData.ProjectPicture.Url}}\" *ngIf=\"!ProjectFollowedData.ProjectVideo\" class=\"img-responsive\">\n\t\t\t<video style=\"width:100%;height:100%;\" id=\"dsf\" class=\"mediaelement-player sh-mediaelementplayer\" controls=\"controls\" preload=\"none\" \n\t\t\tposter=\"//sbndv3.cloudimg.io/s/crop/755x425{{ProjectFollowedData.ProjectPicture.Url}}\" *ngIf=\"ProjectFollowedData.ProjectVideo\">\n            \t<source type=\"video/mp4\" src=\"{{ProjectFollowedData.ProjectVideo.Url}}\" />\n        \t</video>\n\t\t</div>\n\t\t<div class=\"padding1 {{BackgroundRightPanelClass}}\" [hidden]=\"IsMain\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ },

/***/ 725:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"CurrentProjectFollowedData.IsComplete\">\n\tThis survey has already been completed\n</div>\n\n<div *ngIf=\"!CurrentProjectFollowedData.IsComplete\">\n\t<div *ngIf=\"LastStepCompleted==0\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t<img src=\"assets/images/local-area.png\" width=\"70px\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-11 padding-top1 sectionTitle\" >\n\t\t\t\t<div class=\"xl\">What impact has this project had on your area?</div>\n\t\t\t\t\t<div class=\"margin-top2\">\n\t\t\t\t\t<form novalidate #step1Form=\"ngForm\"  id=\"step1Form\" name=\"step1Form\" [error-form]=\"step1Form\" [displayErrors]=\"displayErrors\" class=\"no-margin\">\n\t\t\t\t\t\t<p class=\"bold\">I think this project:</p>\n\t\t\t\t\t\t<div class=\"form-group row margin-top1\">\n\t\t\t\t\n\t\t\t\t        \t<div class=\"reasonPledging borderPurple\" [ngClass]=\"{'selectedReason': item.Selected }\" *ngFor=\"let item of SurveyData.ImpactList;let i=index\">\n\t\t\t\t\t            <label class=\"font-normal no-margin pointer\">\n\t\t\t\t\t                 <input type=\"checkbox\" class=\"hidden\" name=\"Impact[{{i}}]\" id=\"Impact[{{i}}]\" [(ngModel)]=\"item.Selected\" (ngModelChange)=\"checkedImpactAreas(step1Form)\"><span class=\"labelText\">{{item.Name}}</span>\n\t\t\t\t\t            </label>\n\t\t\t\t\t        </div>\n\n\t\t\t\t\t\t\t<input [required]=\"(SurveyData.ImpactList | filterBy: { Selected: true }).length == 0\" type=\"hidden\" class=\"hidden validateHidden\" [(ngModel)]=\"hiddenFilledImpactArea\" #ImpactAreasHidden=\"ngModel\" name=\"hiddenFilledImpactArea\" id=\"hiddenFilledImpactArea\" />\n\t\t\t \t        </div>\n\t\t\t \t        <div class=\"row\">\n\t\t\t\t \t        <div class=\"col-sm-12\">\n\t\t\t\t \t        \t<div *ngIf=\"ImpactAreasHidden.invalid && ImpactAreasHidden.touched\">\n\t\t\t\t\t            \t<label class=\"validation-error-label\">Please select at least one impact</label>\n\t\t\t\t\t        \t</div>\n\t\t\t\t \t        </div>\n\t\t\t\t \t        <div class=\"col-sm-12 text-right\">\n\t\t\t\t \t        \t<button type=\"button\" class=\"btn btn-primary marked bold\" (click)=\"goToStep(LastStepCompleted+1, step1Form)\">SAVE & NEXT</button>\n\t\t\t\t \t        </div>\n\t\t\t \t        </div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"LastStepCompleted==1\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t<img src=\"assets/images/local-area.png\" width=\"70px\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-11 padding-top1 sectionTitle\">\n\t\t\t\t<p class=\"xl\">What impact has this project had on your area?</p>\n\t\t\t\t<div class=\"margin-top2 bold\">Does this project make you feel any differently about your area?</div>\n\t\t\t\t<form #step2Form=\"ngForm\" novalidate id=\"step2Form\" name=\"step2Form\" [error-form]=\"step2Form\" [displayErrors]=\"displayErrors\" class=\"no-margin\" >\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"selectBarContainer\">\n\t\t\t\t\t\t\t\t<div class=\"selectBarLine\"></div>\n\t\t\t\t\t\t\t\t<div class=\"selectBarBullet bullet0\" (click)=\"SurveyData.FeelsLike = 0\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"SurveyData.FeelsLike == 0\" class=\"facePin sadFacePin\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"selectBarBullet bullet2of4\" (click)=\"SurveyData.FeelsLike = 1\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"SurveyData.FeelsLike == 1\" class=\"facePin normalFacePin\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"selectBarBullet bullet3of4\" (click)=\"SurveyData.FeelsLike = 2\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"SurveyData.FeelsLike == 2\" class=\"facePin happyFacePin\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"selectBarBullet bulletLast\" (click)=\"SurveyData.FeelsLike = 3\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"SurveyData.FeelsLike == 3\" class=\"facePin veryHappyFacePin\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row margin-top2\">\n\t\t\t\t\t\t<div class=\"col-sm-2\">Worse than before</div>\n\t\t\t\t\t\t<div class=\"col-sm-4 text-center\">Same as before</div>\n\t\t\t\t\t\t<div class=\"col-sm-4 text-center\">Better than before</div>\n\t\t\t\t\t\t<div class=\"col-sm-2 text-right\">Miles better​​​​​ - I love it!</div>\n\t\t\t\t\t</div>\n\t\t\t        <div class=\"row margin-top2\">\n\t\t\t\t        <div class=\"text-right col-sm-12\">\n\t\t\t\t        \t<button type=\"button\" class=\"btn btn-primary marked bold\" (click)=\"goToStep(LastStepCompleted+1, step2Form)\">SAVE & NEXT</button>\t\n\t\t\t\t        </div>  \t\n\t\t\t        </div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"LastStepCompleted==2\">\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t<img src=\"assets/images/local-area.png\" width=\"70px\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-11 padding-top1 sectionTitle\">\n\t\t\t\t<p class=\"xl\">What impact has this project had on your area?</p>\n\t\t\t\t<div class=\"margin-top2 bold\">Since backing this project, do you feel like you have any more power over what happens in your local area?</div>\n\n\t\t\t\t<form #step3Form=\"ngForm\" novalidate id=\"step3Form\" name=\"step3Form\" [error-form]=\"step3Form\" [displayErrors]=\"displayErrors\" class=\"no-margin\">\n\t\t\t\t\t\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"selectBarContainer\">\n\t\t\t\t\t\t\t\t<div class=\"selectBarLine\"></div>\n\n\t\t\t\t\t\t\t\t<div class=\"selectBarBullet bullet0\" (click)=\"SurveyData.FeelsMorePower = 0\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"SurveyData.FeelsMorePower == 0\" class=\"faceCircle sadFaceCircle\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"selectBarBullet bullet2of3\" (click)=\"SurveyData.FeelsMorePower = 1\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"SurveyData.FeelsMorePower == 1\" class=\"faceCircle normalFaceCircle\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"selectBarBullet bulletLast\" (click)=\"SurveyData.FeelsMorePower = 2\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"SurveyData.FeelsMorePower == 2\" class=\"faceCircle happyFaceCircle\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row margin-top2\">\n\t\t\t\t\t\t<div class=\"col-sm-2\">No, I feel like I have less power</div>\n\t\t\t\t\t\t<div class=\"col-sm-8 text-center\">I feel the same as before</div>\n\t\t\t\t\t\t<div class=\"col-sm-2 text-right\">Yes, I feel like I have more power</div>\n\t\t\t\t\t</div>\n\t\t\t        <div class=\"row margin-top2\">\n\t\t\t\t        <div class=\"text-right col-sm-12\">\n\t\t\t\t        \t<button type=\"button\" class=\"btn btn-primary marked bold\" (click)=\"goToStep(LastStepCompleted+1, step3Form)\">SAVE & NEXT</button>\t\n\t\t\t\t        </div>  \t\n\t\t\t        </div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"LastStepCompleted==3\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t<img src=\"assets/images/local-area.png\" width=\"70px\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-11 padding-top1 sectionTitle\">\n\n\t\t\t\t<p class=\"xl\">What impact has this project had on you?</p>\n\t\t\t\t<div class=\"margin-top2\">\n\t\t\t\t<div class=\"bold\">Have you met new people as a result of this project?</div>\n\t\t\t\t\t<form #step4Form=\"ngForm\" novalidate id=\"step4Form\" name=\"step4Form\" [error-form]=\"step4Form\" [displayErrors]=\"displayErrors\" class=\"no-margin\">\n\t\t\t\t\t\t<div class=\"margin-top1 form-group\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t<label class=\"font-normal\">\n\t\t\t\t\t\t             \t<input type=\"checkbox\" name=\"MeetNewPeople\" id=\"MeetNewPeople\" [(ngModel)]=\"SurveyData.MeetNewPeople\" class=\"sh-bootstrap-switch\" />\n\t\t\t\t\t\t        \t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-10\" [hidden]=\"!SurveyData.MeetNewPeople\">\n\t\t\t\t\t\t\t\t\t<span>How many?</span>\n\n\t\t\t\t\t\t\t        <input type=\"text\" name=\"NumberNewPeople\" id=\"NumberNewPeople\" [(ngModel)]=\"SurveyData.NumberNewPeople\" [required]=\"SurveyData.MeetNewPeople\" #NumberNewPeople=\"ngModel\" class=\"margin-left1 border border-green\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\" *ngIf=\"NumberNewPeople.invalid && NumberNewPeople.touched\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<label class=\"validation-error-label\">Please enter a number of people</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t        </div>\n\t\t\t\t        \n\t\t\t\t        <div class=\"bold\">Have you made any new friends as a result of this project?</div>\n\t\t\t\t        <div class=\"margin-top1 form-group\">\n\t\t\t\t        \t<div class=\"row\">\n\t\t\t\t        \t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t<label class=\"font-normal\">\n\t\t\t\t\t\t\t             <input type=\"checkbox\" name=\"MadeNewFriends\" id=\"MadeNewFriends\" [(ngModel)]=\"SurveyData.MadeNewFriends\" class=\"sh-bootstrap-switch\">\n\t\t\t\t\t\t\t        </label>\n\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t        <div class=\"col-sm-10\" [hidden]=\"!SurveyData.MadeNewFriends\">\n\t\t\t\t\t\t        \t<span>How many?</span>\n\t\t\t\t\t\t        \t<input type=\"text\" name=\"NumberNewFriends\" id=\"NumberNewFriends\" [(ngModel)]=\"SurveyData.NumberNewFriends\" [required]=\"SurveyData.MadeNewFriends\" #NumberNewFriends=\"ngModel\" class=\"margin-left1 border border-green\">\n\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t    <div class=\"row\" *ngIf=\"NumberNewFriends.invalid && NumberNewFriends.touched\">\n\t\t\t\t\t\t\t    <div class=\"col-sm-12\">\n\t\t\t\t\t\t\t    \t<label class=\"validation-error-label\">Please enter a number of friends</label>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t        </div>\n\t\t\t\t        </div>\n\t\t\t\t\t\t<div class=\"row margin-top1\">\n\t\t\t\t\t        <div class=\"text-right col-sm-12\">\n\t\t\t\t\t        \t<button type=\"button\" class=\"btn btn-primary marked bold\" (click)=\"goToStep(LastStepCompleted+1, step4Form)\">SAVE & NEXT</button>\t\n\t\t\t\t\t        </div>  \t\n\t\t\t        \t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"LastStepCompleted==4\">\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t<img src=\"assets/images/local-area.png\" width=\"70px\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-11 padding-top1 sectionTitle\">\n\n\t\t\t\t<p class=\"xl\">What impact has this project had on you?</p>\n\n\t\t\t\t<div class=\"margin-top2\">\n\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<label class=\"font-normal\">\n\t\t\t\t\t\t\t\t <span class=\"bold\">Have you visited this project?</span>\n\t\t\t\t\t             <input type=\"checkbox\" name=\"VisitProject\" id=\"VisitProject\" [(ngModel)]=\"SurveyData.VisitProject\" class=\"sh-bootstrap-switch\">\n\t\t\t\t\t        </label>\n\t\t\t\t\t\t</div>\n\t\t\t        </div>\n\t\t\t        <div [hidden]=\"!SurveyData.VisitProject\">\n\t\t\t        \t<div class=\"margin-top1\">\n\t\t\t        \t\n\t\t\t\t        \t\t<div class=\"circleSelector inline-block\" [ngClass]=\"{'orange-light white': SurveyData.TimesVisited == 1 }\" (click)=\"SurveyData.TimesVisited = 1\" >\n\t\t\t\t        \t\t\t<div class=\"contentText\">Once</div>\n\t\t\t\t        \t\t</div>\n\t\t\t\t        \n\t\t\t\t        \n\t\t\t\t\t\t\t\t<div class=\"circleSelector inline-block\" [ngClass]=\"{'orange-light white': SurveyData.TimesVisited == 2 }\" (click)=\"SurveyData.TimesVisited = 2\">\n\t\t\t\t\t\t\t\t\t<div class=\"contentText\">2 times</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"circleSelector inline-block\" [ngClass]=\"{'orange-light white': SurveyData.TimesVisited == 3 }\" (click)=\"SurveyData.TimesVisited = 3\">\n\t\t\t\t\t\t\t\t\t<div class=\"contentText\">3 times</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t\t\t<div class=\"circleSelector inline-block\" [ngClass]=\"{'orange-light white': SurveyData.TimesVisited == 4 }\" (click)=\"SurveyData.TimesVisited = 4\">\n\t\t\t\t\t\t\t\t\t<div class=\"contentText\">4 times</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t\t\t<div class=\"circleSelector inline-block\" [ngClass]=\"{'orange-light white': SurveyData.TimesVisited == 5 }\" (click)=\"SurveyData.TimesVisited = 5\">\n\t\t\t\t\t\t\t\t\t<div class=\"contentText\">5+ times</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"circleSelector inline-block\" [ngClass]=\"{'orange-light white': SurveyData.TimesVisited == 10 }\" (click)=\"SurveyData.TimesVisited = 10\">\n\t\t\t\t\t\t\t\t\t<div class=\"contentText\">10+ times</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t        </div>\n\n\t\t\t\t\t<div class=\"margin-top2 bold\">As well as pledging did you support this project in any other way?</div>\n\t\t\t\t\t<div class=\"margin-top1\">\n\t\t\t\t\t    <div class=\"reasonPledging borderGreen\" [ngClass]=\"{'selectedSupportOtherWay': item.Selected }\" *ngFor=\"let item of SurveyData.SupportOtherWay;let i=index\">\n\t\t\t\t            <label class=\"font-normal no-margin pointer\">\n\t\t\t\t            \t<input type=\"checkbox\" class=\"hidden\" name=\"SupportOtherWay[{{i}}]\" id=\"SupportOtherWay[{{i}}]\" [(ngModel)]=\"item.Selected\"><span class=\"labelText\">{{item.Name}}</span>\n\t\t\t\t            </label>\n\t\t\t\t        </div>\n\n\n\t\t\t\t        <div class=\"row margin-top2\">\n\t\t\t\t\t        <div class=\"text-right col-sm-12\">\n\t\t\t\t\t        \t<button type=\"button\" class=\"btn btn-primary marked bold\" (click)=\"goToStep(LastStepCompleted+1, null)\">SAVE & NEXT</button>\t\n\t\t\t\t\t        </div>  \t\n\t\t\t\t        </div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"LastStepCompleted==5\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t<img src=\"assets/images/local-area.png\" width=\"70px\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-11 padding-top1 sectionTitle\">\n\t\t\t\t<p class=\"xl\">What impact has this project had on you?</p>\n\t\t\t\t<div class=\"margin-top2 bold\">In one sentence, summarise what this projects means to you</div>\n\n\t\t\t\t<div class=\"form-group margin-top1\">\n\t\t\t\t\t<textarea [(ngModel)]=\"SurveyData.ProjectMeansText\" #ProjectMeansText=\"ngModel\" class=\"form-control\" rows=\"5\" id=\"ProjectMeansText\" name=\"ProjectMeansText\" [maxlength]=\"500\"></textarea>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"row margin-top2\">\n\t\t\t        <div class=\"text-right col-sm-12\">\n\t\t\t        \t<button type=\"button\" class=\"btn btn-primary marked bold\" (click)=\"goToStep(LastStepCompleted+1, null)\">FINISH</button>\t\n\t\t\t        </div>  \t\n\t\t        </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"LastStepCompleted>5\">\n\t\t<div class=\"thankYouContainer\">\n\t\t\t<div class=\"contentText\">\n\t\t\t\t<div class=\"arrow_box xl padding2\">Thank you! We really appreciate it!</div>\n\t\t\t\t<div class=\"margin-top2\">\n\t\t\t\t\t<img src=\"{{CurrentProjectFollowedData.ProjectCreatorPicture.Url}}\" class=\"organisationLogoCircle\"  /> \n\t\t\t\t</div>\n\t\t\t\t<!-- <div class=\"btn btn-primary marked margin-top2 bold\">CHECK OUT OUR DELIVERY REPORT</div> -->\n\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>"

/***/ },

/***/ 994:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(434);


/***/ }

},[994]);
//# sourceMappingURL=main.bundle.map