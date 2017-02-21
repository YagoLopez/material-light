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
var PagSnackbar = (function () {
    function PagSnackbar() {
        this.config = {
            message: 'Message Sent',
            actionHandler: function (event) {
                console.log(event);
                window.alert('Action event logged to console');
            },
            actionText: 'Action',
            timeout: 5000
        };
    }
    PagSnackbar = __decorate([
        core_1.Component({
            template: "\n\n<h5>Snackbar</h5>\n\n<ml-button (click)=\"snackbar.show()\" aspect=\"raised, colored, accent\">Open SnackBar</ml-button>\n\n<ml-snackbar [config]=\"config\" #snackbar></ml-snackbar>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagSnackbar);
    return PagSnackbar;
}());
exports.PagSnackbar = PagSnackbar;
//# sourceMappingURL=pagSnackbar.js.map