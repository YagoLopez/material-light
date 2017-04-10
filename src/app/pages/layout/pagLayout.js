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
var core_1 = require("@angular/core");
var mlRadio_1 = require("../../ml/components/controls/radio/mlRadio");
var PagLayout = (function () {
    function PagLayout() {
        this.imgBackgrnd = 'assets/img/city2.jpg';
        this.mlLayout = document.querySelector('ml-layout');
        this.mlHeader = this.mlLayout.querySelector('ml-header');
        this.mlTitle = this.mlLayout.querySelector('ml-title');
        this.mlHeaderTabs = this.mlLayout.querySelector('div.mdl-layout__tab-bar-container');
        this.mlContent = this.mlLayout.querySelector('ml-content');
        this.mlContentTabheader = this.mlLayout.querySelector('ml-content-tabheader');
    }
    PagLayout.prototype.backgroundBtn = function (color) {
        var btns = this.mlLayout.querySelectorAll('view-source > div > a');
        Array.from(btns).forEach(function (btn) { btn.style.background = color; });
    };
    PagLayout.prototype.disableRadioBtn = function (radioBtn) {
        radioBtn.setDisabled();
        radioBtn.label.nativeElement.querySelector('span').style.color = '#757575';
        radioBtn.label.nativeElement.querySelector('span.mdl-radio__outer-circle').
            style.cssText = 'border: 2px solid #757575 !important';
    };
    PagLayout.prototype.enableRadioBtn = function (radioBtn) {
        radioBtn.setEnabled();
        radioBtn.label.nativeElement.querySelector('span').style.color = 'orange';
        radioBtn.label.nativeElement.querySelector('span.mdl-radio__outer-circle').
            style.cssText = 'border: 2px solid orange !important';
    };
    PagLayout.prototype.backgroundTransparent = function () {
        this.mlLayout.style.color = this.mlTitle.style.color = 'white';
        this.mlLayout.style.background = "url('" + this.imgBackgrnd + "') 0 0 / cover";
        this.mlHeader.style.cssText = 'background-color: transparent; box-shadow: none !important';
        this.mlHeaderTabs.style.display = 'none';
        this.mlContent.style.backgroundColor = 'transparent';
        this.mlContentTabheader.style.cssText = 'background-color: transparent; border: none; box-shadow: none';
        this.backgroundBtn('darkgrey');
        this.disableRadioBtn(this.radioFixedHead);
        this.disableRadioBtn(this.radioScrollHead);
    };
    PagLayout.prototype.solidBackground = function () {
        this.mlLayout.style.cssText = 'color: black; background: ""';
        this.mlHeader.style.cssText = 'background-color: ""; box-shadow: 0 1px 8px 2px rgba(0, 0, 0, 0.2)';
        this.mlHeaderTabs.style.display = 'initial';
        this.mlContent.style.backgroundColor = '';
        this.mlContentTabheader.style.cssText = "@media (min-width: 700px) {background-color: white; margin: auto;\n      width: 60%; padding: 25px 50px 50px; border: 1px solid lightgrey; box-shadow: 1px 1px 5px lightgrey; }";
        this.backgroundBtn('');
        this.enableRadioBtn(this.radioScrollHead);
    };
    PagLayout.prototype.fixedHeaderTabs = function () {
        this.mlHeader.classList.remove('mdl-layout__header--waterfall');
    };
    PagLayout.prototype.scrollableHeaderTabs = function () {
        this.mlHeader.classList.add('mdl-layout__header--waterfall');
        this.enableRadioBtn(this.radioFixedHead);
    };
    PagLayout.prototype.ngOnDestroy = function () {
        this.solidBackground();
        this.scrollableHeaderTabs();
    };
    __decorate([
        core_1.ViewChild('radio_scroll_head'), 
        __metadata('design:type', mlRadio_1.MlRadio)
    ], PagLayout.prototype, "radioScrollHead", void 0);
    __decorate([
        core_1.ViewChild('radio_fixed_head'), 
        __metadata('design:type', mlRadio_1.MlRadio)
    ], PagLayout.prototype, "radioFixedHead", void 0);
    PagLayout = __decorate([
        core_1.Component({
            template: "\n\n<style>\n:host /deep/ ml-radio {margin-left: 20px}\n:host /deep/ span.mdl-radio__label {color: orange; font-family: \"Roboto\", \"Arial\", sans-serif; font-size: smaller}\n:host /deep/ span.mdl-radio__inner-circle {background: orange !important} \n:host /deep/ span.mdl-radio__outer-circle {border: 2px solid orange !important}\n</style>\n\n<h5>Material Light Layout</h5>\n\n<p><strong>&lt;ml-layout&gt;</strong> is the base component where other components are placed</p> \n\n<p>The Material Light layout contains three main sections</p>\n<ul>\n  <li><strong>&lt;ml-header&gt;</strong>: the upper bar with the title</li>  \n  <li><strong>&lt;ml-drawer&gt;</strong>: the menu to the left</li>\n  <li><strong>&lt;ml-content&gt;</strong>: the main content area (suitable to place the router-outlet)</li>\n</ul>\n\n<p>Each section can have variations. For example <strong>ml-header</strong> can have tabs, links, or other icons</p>\n<p>Here are some examples of <strong>ml-layout</strong> variations: </p>\n\n\n<div><ml-radio #radio_scroll_head checked=\"true\" (click)=\"scrollableHeaderTabs()\">\n  Scrollable Header-Tabs</ml-radio></div>\n<div><ml-radio #radio_fixed_head (click)=\"fixedHeaderTabs()\">Fixed Header-Tabs</ml-radio></div>\n<div><ml-radio (click)=\"backgroundTransparent()\">Background transparent with image</ml-radio></div>\n<p><ml-radio (click)=\"solidBackground()\">Solid background color</ml-radio></p>\n\n\n<p>There is also the posibility of having different nested drawers and headers in each page using auxiliary \nrouter-outlets. This feature is experimental and still has not been tested</p>\n\n<p>All options will be explained in the API documentation which is actually in process.\nMeanwhile take a look at the examples and the code.</p>\n\n<div>Here is the source code of this layout demo:</div>\n<view-source uri=\"../app.layout.ts\"></view-source>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagLayout);
    return PagLayout;
}());
exports.PagLayout = PagLayout;
