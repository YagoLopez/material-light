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
var PagTable = (function () {
    function PagTable() {
    }
    PagTable = __decorate([
        core_1.Component({
            template: "\n\n<h5>Table</h5>\n\n<table ml-table selectable>\n  <!-- Table head ------------------------------------------------------------------------------------------------ -->\n  \n  <thead>\n    <tr>\n      <th text-cell>Material</th>\n      <th>Quantity</th>\n      <th>Unit price</th>\n    </tr>\n  </thead>\n\n  <!-- Table body ------------------------------------------------------------------------------------------------ -->\n\n  <tbody>\n    <tr>\n      <td text-cell>Acrylic (Transparent)</td>\n      <td>25</td>\n      <td>$2.90</td>\n    </tr>\n    <tr>\n      <td text-cell>Plywood (Birch)</td>\n      <td>50</td>\n      <td>$1.25</td>\n    </tr>\n    <tr>\n      <td text-cell>Laminate (Gold on Blue)</td>\n      <td>10</td>\n      <td>$2.35</td>\n    </tr>      \n  </tbody>\n  \n  <!-- End table body -------------------------------------------------------------------------------------------- -->\n</table>\n\n<view-source uri=\"table/pagTable.ts\"></view-source>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagTable);
    return PagTable;
}());
exports.PagTable = PagTable;
