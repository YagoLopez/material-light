"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//todo: habria que cancelar siempre el timer o eliminar el snackbar preventivamente antes de mostrar un nuevo
//snackbar para prevenir que se puedan crear varios snackbars al hacer varios clicks rapidos => possible memory leaking
var mdl_element_1 = require("../element/mdl_element");
var MdlSnackbar = (function (_super) {
    __extends(MdlSnackbar, _super);
    function MdlSnackbar(el) {
        _super.call(this, el);
        this.textElement_ = this.element_.querySelector('.' + this.CssClasses_.MESSAGE);
        this.actionElement_ = this.element_.querySelector('.' + this.CssClasses_.ACTION);
        if (!this.textElement_)
            throw new Error('There must be a message element for a snackbar.');
        if (!this.actionElement_)
            throw new Error('There must be an action element for a snackbar.');
        this.active = false;
        this.queuedNotifications_ = [];
        this.setActionHidden_(true);
    }
    return MdlSnackbar;
}(mdl_element_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MdlSnackbar;
MdlSnackbar.prototype.init = function () { };
MdlSnackbar.prototype.Constant_ = {
    // The duration of the snackbar show/hide animation, in ms.
    ANIMATION_LENGTH: 250
};
MdlSnackbar.prototype.CssClasses_ = {
    SNACKBAR: 'mdl-snackbar',
    MESSAGE: 'mdl-snackbar__text',
    ACTION: 'mdl-snackbar__action',
    ACTIVE: 'mdl-snackbar--active'
};
MdlSnackbar.prototype.displaySnackbar_ = function () {
    this.element_.setAttribute('aria-hidden', 'true');
    if (this.actionHandler_) {
        this.actionElement_.textContent = this.actionText_;
        this.actionElement_.addEventListener('click', this.actionHandler_);
        this.setActionHidden_(false);
    }
    this.textElement_.textContent = this.message_;
    this.element_.classList.add(this.CssClasses_.ACTIVE);
    this.element_.setAttribute('aria-hidden', 'false');
    // modificaciones
    // setTimeout(this.cleanup_.bind(this), this.timeout_);
    this.snackbarTimer_ = setTimeout(this.cleanup_.bind(this), this.timeout_);
    // fin modificaciones
};
MdlSnackbar.prototype.showSnackbar = function (data) {
    if (data === undefined) {
        throw new Error('Please provide a data object with at least a message to display.');
    }
    if (data['message'] === undefined) {
        throw new Error('Please provide a message to be displayed.');
    }
    if (data['actionHandler'] && !data['actionText']) {
        throw new Error('Please provide action text with the handler.');
    }
    if (this.active) {
        this.queuedNotifications_.push(data);
    }
    else {
        this.active = true;
        this.message_ = data['message'];
        if (data['timeout']) {
            this.timeout_ = data['timeout'];
        }
        // modificaciones
        // else {
        //     this.timeout_ = 2750;
        // }
        // fin modificaciones
        if (data['actionHandler']) {
            this.actionHandler_ = data['actionHandler'];
        }
        if (data['actionText']) {
            this.actionText_ = data['actionText'];
        }
        this.displaySnackbar_();
    }
};
MdlSnackbar.prototype.checkQueue_ = function () {
    if (this.queuedNotifications_.length > 0) {
        this.showSnackbar(this.queuedNotifications_.shift());
    }
};
MdlSnackbar.prototype.cleanup_ = function () {
    this.element_.classList.remove(this.CssClasses_.ACTIVE);
    setTimeout(function () {
        this.element_.setAttribute('aria-hidden', 'true');
        this.textElement_.textContent = '';
        if (!Boolean(this.actionElement_.getAttribute('aria-hidden'))) {
            this.setActionHidden_(true);
            this.actionElement_.textContent = '';
            this.actionElement_.removeEventListener('click', this.actionHandler_);
        }
        this.actionHandler_ = undefined;
        this.message_ = undefined;
        this.actionText_ = undefined;
        this.active = false;
        this.checkQueue_();
    }.bind(this), this.Constant_.ANIMATION_LENGTH);
    // modificaciones
    clearTimeout(this.snackbarTimer_);
    clearTimeout(this.timer_);
    // fin modificaciones
};
MdlSnackbar.prototype.setActionHidden_ = function (value) {
    if (value) {
        this.actionElement_.setAttribute('aria-hidden', 'true');
    }
    else {
        this.actionElement_.removeAttribute('aria-hidden');
    }
};
