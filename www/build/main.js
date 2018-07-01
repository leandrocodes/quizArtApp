webpackJsonp([7],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Entrar com e-mail');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    AuthService.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Início" tabIcon="ios-home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Info" tabIcon="ios-information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Configurações" tabIcon="ios-settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, auth, fb) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar color="myc">\n    <ion-title>\n      <h1 class="header">Login</h1>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background">\n\n  <img src="https://firebasestorage.googleapis.com/v0/b/quizart-6eed4.appspot.com/o/Ativo%205.png?alt=media&token=14cd0778-e005-422f-839e-5c419933ded9"\n    alt="">\n\n  <form (ngSubmit)="login()" [formGroup]="loginForm">\n\n    <ion-list inset>\n\n      <ion-item class="log-input" [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n        <ion-label floating class="label">\n          Email:\n        </ion-label>\n        <ion-input type="text" formControlName="email"></ion-input>\n      </ion-item>\n\n      <div class="erros" ngxErrors="email" #emailErrors="ngxErrors">\n        <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">Insira um e-mail válido.</div>\n      </div>\n\n      <ion-item class="log-input" [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n        <ion-label floating class="label">\n          Senha:\n        </ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n\n      <div class="erros" ngxErrors="password" #passwordErrors="ngxErrors">\n        <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">A senha deve conter mais de 5 caracteres.</div>\n      </div>\n    </ion-list>\n\n    <div padding-horizontal>\n      <div class="form-error">{{loginError}}</div>\n\n      <div id="topButtons">\n        <button ion-button type="submit" [disabled]="!loginForm.valid">Login</button>\n      </div>\n\n\n\n    </div>\n  </form>\n  <div class="log-btn">\n    <button ion-button icon-left block clear (click)="loginWithGoogle()">\n      <ion-icon name="logo-googleplus"></ion-icon>\n      Entrar com o Google\n    </button>\n\n    <button ion-button icon-left block clear (click)="signup()">\n      <ion-icon name="md-person-add"></ion-icon>\n      Registrar uma conta\n    </button>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_view_game_view__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        var result = navParams.get('checkAnswer'), correctAnswer = navParams.get('correctAnswer'), total = navParams.get('totalQuizNum');
        this.answerIsCorrect = result;
        this.correctAnswer = correctAnswer;
        this.totalQuizNum = total;
    }
    FeedbackPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('quizIndex').then(function (val) {
            _this.currentIndex = val;
        });
    };
    FeedbackPage.prototype.nextQuiz = function () {
        var _this = this;
        this.storage.get('quizIndex').then(function (val) {
            var currentQuizIndex = val;
            _this.storage.set('quizIndex', currentQuizIndex + 1);
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__game_view_game_view__["a" /* GameViewPage */]);
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\feedback\feedback.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>QuizArt</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n   <ion-grid>\n    <ion-row align-items-center>\n      <ion-col class="center" align-self-center>       \n        <h2 class="feedback">\n          {{(answerIsCorrect === true) ? "Muito bem!" : "Aaahh... resposta errada!"}}\n        </h2>\n        <ion-img class ="img" *ngIf="answerIsCorrect === false"\n          width="150" height="150" src="https://firebasestorage.googleapis.com/v0/b/quizart-6eed4.appspot.com/o/sad.png?alt=media&token=9ad4f4a0-3e00-4675-b861-be1a403a19a4">\n        </ion-img>\n        <ion-img class ="img" *ngIf="answerIsCorrect === true"\n          width="150" height="150" src="https://firebasestorage.googleapis.com/v0/b/quizart-6eed4.appspot.com/o/happy.png?alt=media&token=20c8bb0f-0fd0-4acf-88bf-a60f9c55ecd6">\n        </ion-img>\n        <h5 class="feedback" *ngIf="answerIsCorrect === false">\n          A resposta correta era: <br> "{{correctAnswer}}"\n        </h5>\n        <div class="center">\n          <button ion-button (click)="nextQuiz()">\n            {{(currentIndex+1 === totalQuizNum) ? "Mostre-me quantas eu acertei!" : "Próxima!"}}\n          </button>\n        </div>\n      </ion-col>    \n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\feedback\feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_view_game_view__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultsPage = /** @class */ (function () {
    function ResultsPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    ResultsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('results').then(function (val) {
            _this.results = val;
            _this.quizTotal = _this.results.length;
            var filterAnswers = _this.results.filter(function (answer) { return answer.yourAnswer === answer.correctAnswer; });
            _this.correctTotal = filterAnswers.length;
        });
    };
    ResultsPage.prototype.backHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    ResultsPage.prototype.restart = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__game_view_game_view__["a" /* GameViewPage */]);
        this.storage.set('quizIndex', 0);
        this.storage.set('results', []);
    };
    ResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-results',template:/*ion-inline-start:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\results\results.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Trivia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid *ngIf = "results">\n    <ion-row>\n      <ion-col width-50 offset-25>       \n        <h2 class="feedback">\n          Your results\n        </h2>\n        <h1>\n            You got {{correctTotal}} out of {{quizTotal}}!\n        </h1>\n        <p *ngIf="correctTotal === quizTotal">\n          You are the master of Trivia!\n        </p>\n        <p *ngIf="correctTotal/quizTotal >= .75">\n          You almost got a perfect score keep it up!\n        </p>\n        <p *ngIf="correctTotal/quizTotal < .75">\n          You can do this! Maybe try playing again?\n        </p>\n        <ion-list>\n          <ion-item *ngFor="let result of results">\n            Correct answer: {{result.correctAnswer}}\n            \n            Your answer: {{result.yourAnswer}}\n          </ion-item>  \n        </ion-list>\n        <div class="center">\n          <button ion-button (click)="backHome()">Back to home</button>\n        </div>\n        <div class="center">\n          <button ion-button (click)="restart()">Play the same quizzes again</button>\n        </div>  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\results\results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ResultsPage);
    return ResultsPage;
}());

//# sourceMappingURL=results.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.storage.get('option').then(function (val) {
            if (val != null) {
                var option = JSON.parse(val);
                _this.category = option.category;
                _this.difficulty = option.difficulty;
                _this.quizNum = option.quizNum;
            }
            else {
                _this.category = 12;
                _this.difficulty = 'medium';
                _this.quizNum = 10;
            }
        });
    }
    SettingsPage.prototype.saveForm = function () {
        var option = {
            category: this.category,
            difficulty: this.difficulty,
            quizNum: this.quizNum
        };
        this.storage.set('option', JSON.stringify(option));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Configurações</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col width-100>\n        <ion-list>\n          <form (ngSubmit)="saveForm()">\n            <!-- categoria -->\n            <ion-item>\n              <ion-label>Categoria</ion-label>\n              <ion-select [(ngModel)]="category" name="catergory" value="number">\n                <ion-option value=12>Música</ion-option>\n                <ion-option value=11>Cinema</ion-option>\n                <ion-option value=25>Artes Visuais</ion-option>\n              </ion-select>\n            </ion-item>\n            <!-- dificuldade -->\n            <ion-item>\n              <ion-label>Dificuldade</ion-label>\n              <ion-select [(ngModel)]="difficulty" name="difficulty" value="string">\n                <ion-option value="easy">Fácil</ion-option>\n                <ion-option value="medium">Médio</ion-option>\n                <ion-option value="hard">Difícil</ion-option>\n              </ion-select>\n            </ion-item>\n            <!-- número de questões -->\n            <ion-item>\n              <ion-label>\n                Número de questões\n              </ion-label>\n              <ion-input [(ngModel)]="quizNum" name="quizNum" type="number"></ion-input>\n            </ion-item>\n            <button ion-button type="submit" block>Ok</button>\n          </form>\n        </ion-list>  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n            '/*ion-inline-end:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 193:
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
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-conteudo/add-conteudo.module": [
		516,
		6
	],
	"../pages/add-questao/add-questao.module": [
		517,
		0
	],
	"../pages/feedback/feedback.module": [
		519,
		5
	],
	"../pages/game-view/game-view.module": [
		521,
		4
	],
	"../pages/login/login.module": [
		518,
		3
	],
	"../pages/results/results.module": [
		520,
		2
	],
	"../pages/settings/settings.module": [
		522,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(fb, navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.form = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    RegisterPage.prototype.signup = function () {
        var _this = this;
        var data = this.form.value;
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signUp(credentials).then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return _this.signupError = error.message; });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n  <form (ngSubmit)="signup()" [formGroup]="form">\n    <ion-list inset>\n\n      <ion-item class="log-input" [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n        <ion-label floating>\n          Email:\n        </ion-label>\n        <ion-input type="text" formControlName="email"></ion-input>\n      </ion-item>\n\n      <div class="erros" ngxErrors="email" #emailErrors="ngxErrors">\n        <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">Digite um e-mail válido.</div>\n      </div>\n\n      <ion-item class="log-input" [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n        <ion-label floating>\n          Senha:\n        </ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n\n      <div class="erros" ngxErrors="password" #passwordErrors="ngxErrors">\n        <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">A senha deve conter mais de 5 caracteres</div>\n      </div>\n    </ion-list>\n\n    <div padding-horizontal>\n      <div class="form-error">{{signupError}}</div>\n      <div id="topButtons">\n\n\n        <button ion-button full type="submit" [disabled]="!form.valid">Registrar</button>\n      </div>\n    </div>\n  </form>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Informações\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid class="grid">\n    <ion-row class="row">\n      <ion-col class="col1">\n          <button>Cinema e Fotografia</button>\n        <img src="https://firebasestorage.googleapis.com/v0/b/quizart-6eed4.appspot.com/o/Ativo%201.png?alt=media&token=3b15dc3f-441f-4ad9-bcf9-8c328ff3d677"\n          width="100px">\n      </ion-col>\n\n      <ion-col class="col2">\n        <button>Dança e Teatro</button>\n        <img src="https://firebasestorage.googleapis.com/v0/b/quizart-6eed4.appspot.com/o/Ativo%202.png?alt=media&token=fa1cd519-695b-4efa-ad47-cfdc8e4a374f"\n          width="100px">\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="col3">\n          <button>Pintura e Escultura</button>\n        <img src="https://firebasestorage.googleapis.com/v0/b/quizart-6eed4.appspot.com/o/Ativo%203.png?alt=media&token=5ac33063-576c-4fd0-92be-0f61b14a02d4"\n          width="100px">\n      </ion-col>\n\n      <ion-col class="col4">\n          <button>Música e Literatura</button>\n        <img src="https://firebasestorage.googleapis.com/v0/b/quizart-6eed4.appspot.com/o/Ativo%207.png?alt=media&token=7c74ffb8-1868-488f-866d-848653f1b69c"\n          width="100px">\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizProvider = /** @class */ (function () {
    function QuizProvider(http) {
        this.http = http;
        console.log('Hello QuizProvider Provider');
        this.url = 'https://opentdb.com/api.php?amount=';
    }
    QuizProvider.prototype.getQuiz = function (category, difficulty, quizNum) {
        return this.http.get(this.url + quizNum + '&category=' + category + '&difficulty=' + difficulty)
            .map(function (res) { return res.json(); });
    };
    QuizProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], QuizProvider);
    return QuizProvider;
}());

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddConteudoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddConteudoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddConteudoPage = /** @class */ (function () {
    function AddConteudoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddConteudoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddConteudoPage');
    };
    AddConteudoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-conteudo',template:/*ion-inline-start:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\add-conteudo\add-conteudo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Adicionar Questão</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class ="background">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col width-100>\n        <ion-list>\n          <form>\n            <!-- categoria -->\n            <ion-item class = "log-input">\n              <ion-label>Categoria</ion-label>\n              <ion-select [(ngModel)]="category" name="catergory" value="number">\n                <ion-option value=12>Cinema e Fotografia</ion-option>\n                <ion-option value=11>Dança e Teatro</ion-option>\n                <ion-option value=25>Pintura e Escultura</ion-option>\n                <ion-option value=25>Música e Literatura</ion-option>\n              </ion-select>\n            </ion-item>\n            <!-- dificuldade -->\n            <ion-item class = "log-input">\n              <ion-label>Dificuldade</ion-label>\n              <ion-select [(ngModel)]="difficulty" name="difficulty" value="string">\n                <ion-option value="easy">Fácil</ion-option>\n                <ion-option value="medium">Médio</ion-option>\n                <ion-option value="hard">Difícil</ion-option>\n              </ion-select>\n            </ion-item>\n            <!-- texto da questão -->\n            <ion-item class = "log-input">\n              <ion-textarea placeholder="Escreva aqui a questão"></ion-textarea>\n            </ion-item>\n\n\n            <ion-item class = "log-input"> \n              <ion-label floating> Alternativa 1: </ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n\n\n            <ion-item class = "log-input">\n              <ion-label floating> Alternativa 2: </ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n\n\n            <ion-item class = "log-input">\n              <ion-label floating> Alternativa 3: </ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n\n            <ion-item class = "log-input">\n              <ion-label floating> Alternativa 4: </ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n\n            <div id="topButtons">\n              <button ion-button type="submit" block>Adicionar</button>\n            </div>\n\n\n          </form>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\add-conteudo\add-conteudo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AddConteudoPage);
    return AddConteudoPage;
}());

//# sourceMappingURL=add-conteudo.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(422);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ultimate_ngxerrors__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_game_view_game_view__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_feedback_feedback__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_results_results__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_quiz_quiz__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_data_data__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__config__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_register_register__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_add_conteudo_add_conteudo__ = __webpack_require__(298);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_game_view_game_view__["a" /* GameViewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_results_results__["a" /* ResultsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_add_conteudo_add_conteudo__["a" /* AddConteudoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'ios',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios-transition',
                    scrollPadding: false,
                    scrollAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/add-conteudo/add-conteudo.module#AddConteudoPageModule', name: 'AddConteudoPage', segment: 'add-conteudo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-questao/add-questao.module#AddQuestaoPageModule', name: 'AddQuestaoPage', segment: 'add-questao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/results/results.module#ResultsPageModule', name: 'ResultsPage', segment: 'results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game-view/game-view.module#GameViewPageModule', name: 'GameViewPage', segment: 'game-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_21__config__["a" /* firebaseConfig */].fire),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_6__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_game_view_game_view__["a" /* GameViewPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_results_results__["a" /* ResultsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_add_conteudo_add_conteudo__["a" /* AddConteudoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_quiz_quiz__["a" /* QuizProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_22__services_auth_service__["a" /* AuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.hide();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = /** @class */ (function () {
    function DataProvider(http) {
        this.http = http;
        console.log('Hello DataProvider Provider');
    }
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    fire: {
        apiKey: "AIzaSyC-8ulWAD7_SqZOu0dcE7Es5XMmAUuBOfc",
        authDomain: "quizart-6eed4.firebaseapp.com",
        databaseURL: "https://quizart-6eed4.firebaseio.com",
        projectId: "quizart-6eed4",
        storageBucket: "quizart-6eed4.appspot.com",
        messagingSenderId: "1064356709066"
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback_feedback__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__results_results__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameViewPage = /** @class */ (function () {
    function GameViewPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    GameViewPage.prototype.shuffle = function (arr) {
        var currentIndex = arr.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }
        return arr;
    };
    GameViewPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('quizIndex').then(function (val) {
            _this.quizIndex = val;
        });
        this.storage.get('quizzes').then(function (val) {
            _this.quizzes = JSON.parse(val);
            _this.totalQuizNum = _this.quizzes.results.length;
            if (_this.quizzes !== null && _this.totalQuizNum >= _this.quizIndex + 1) {
                _this.currentQuiz = _this.quizzes.results[_this.quizIndex];
                _this.answers = _this.currentQuiz.incorrect_answers;
                _this.correct = _this.currentQuiz.correct_answer;
                _this.answers.push(_this.correct);
                _this.shuffle(_this.answers);
            }
            else if (_this.totalQuizNum < _this.quizIndex + 1) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__results_results__["a" /* ResultsPage */]);
            }
            ;
        });
    };
    GameViewPage.prototype.trackAnswers = function (answer) {
        var _this = this;
        this.storage.get('results').then(function (val) {
            var results = val, quizResults = {
                yourAnswer: answer,
                correctAnswer: _this.correct
            };
            results.push(quizResults);
            _this.storage.set('results', results);
        });
    };
    GameViewPage.prototype.handleAnswer = function (answer) {
        if (answer === this.correct) {
            this.trackAnswers(answer);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__feedback_feedback__["a" /* FeedbackPage */], {
                checkAnswer: true,
                totalQuizNum: this.totalQuizNum
            });
        }
        else {
            this.trackAnswers(answer);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__feedback_feedback__["a" /* FeedbackPage */], {
                checkAnswer: false,
                correctAnswer: this.correct,
                totalQuizNum: this.totalQuizNum
            });
        }
    };
    GameViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game-view',template:/*ion-inline-start:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\game-view\game-view.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>QuizArt</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="home">\n  <ion-grid *ngIf="currentQuiz">\n    <ion-row>\n      <ion-col width-50 offset-25>\n        <ion-label class="category">\n          <b>Categoria: </b>{{currentQuiz.category}}\n        </ion-label>\n        <ion-label class="category">     \n          <b>Dificuldade: </b>{{currentQuiz.difficulty}}\n        </ion-label>\n     \n        <h2 class="question">{{currentQuiz.question}}</h2>\n        \n        <ion-list>\n          <ion-item class="answers" *ngFor="let answer of answers" (click)="handleAnswer(answer)">\n              {{answer}}\n          </ion-item>\n        </ion-list>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\game-view\game-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], GameViewPage);
    return GameViewPage;
}());

//# sourceMappingURL=game-view.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_quiz_quiz__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_view_game_view__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, quizProvider, storage) {
        this.navCtrl = navCtrl;
        this.quizProvider = quizProvider;
        this.storage = storage;
    }
    ;
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('option').then(function (val) {
            if (val !== null) {
                _this.option = JSON.parse(val);
            }
            else {
                _this.option = {
                    category: 15,
                    difficulty: 'medium',
                    quizNum: 10
                };
            }
            ;
            _this.quizProvider.getQuiz(_this.option.category, _this.option.difficulty, _this.option.quizNum).
                subscribe(function (quiz) {
                _this.storage.set('quizzes', JSON.stringify(quiz));
            });
        });
    };
    ;
    HomePage.prototype.start = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__game_view_game_view__["a" /* GameViewPage */]);
        this.storage.set('quizIndex', 0);
        this.storage.set('results', []);
    };
    ;
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>QuizArt</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="home" padding >\n  <ion-grid class = "home">\n    <ion-row align-items-center>\n      <ion-col align-self-center>\n        <ion-img width="300" height="180" class ="img" src="https://firebasestorage.googleapis.com/v0/b/quizart-6eed4.appspot.com/o/logo(1).png?alt=media&token=17776090-4e0a-4b5b-887a-89e0899a702b"></ion-img>\n        <h2 class="question">Bem-vido!</h2>\n          <button class = "startBtn"ion-button (click)="start()">Começar</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Leandro Viana\Documents\Ionic 3\quizArtApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_quiz_quiz__["a" /* QuizProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

;
//# sourceMappingURL=home.js.map

/***/ })

},[299]);
//# sourceMappingURL=main.js.map