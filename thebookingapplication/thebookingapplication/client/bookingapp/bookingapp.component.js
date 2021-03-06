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
var app_service_1 = require('./services/app.service');
var primeng_1 = require('primeng/primeng');
var ng2_modal_1 = require('ng2-modal');
var bookingappComponent = (function () {
    function bookingappComponent(bookingappservice) {
        var _this = this;
        this.bookingappservice = bookingappservice;
        this.bookingappservice.getAppointments().subscribe(function (appointments) {
            _this.appointments = appointments;
        });
    }
    bookingappComponent.prototype.updateTable = function (thedate) {
        var _this = this;
        console.log(thedate);
        thedate = new Date(thedate.toISOString());
        this.bookingappservice.updateTable(thedate).subscribe(function (appointments) {
            _this.appointments = appointments;
        });
    };
    bookingappComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main-application',
            templateUrl: 'bookingapp.component.html',
            entryComponents: [primeng_1.Calendar, ng2_modal_1.Modal],
            providers: [app_service_1.bookingappService],
        }), 
        __metadata('design:paramtypes', [app_service_1.bookingappService])
    ], bookingappComponent);
    return bookingappComponent;
}());
exports.bookingappComponent = bookingappComponent;
//# sourceMappingURL=bookingapp.component.js.map