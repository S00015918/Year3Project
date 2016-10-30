"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var primeng_1 = require('primeng/primeng');
var bookingapp_component_1 = require('./bookingapp.component');
var BookingAppModule = (function () {
    function BookingAppModule() {
    }
    BookingAppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, primeng_1.CalendarModule],
            declarations: [bookingapp_component_1.bookingappComponent],
            bootstrap: [bookingapp_component_1.bookingappComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], BookingAppModule);
    return BookingAppModule;
}());
exports.BookingAppModule = BookingAppModule;
//# sourceMappingURL=bookingapp.module.js.map