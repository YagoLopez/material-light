"use strict";
var page_tabs_1 = require("./pages/page-tabs");
var page_switch_1 = require("./pages/page-switch");
var page_progressbar_1 = require("./pages/page-progressbar");
var page_spinner_1 = require("./pages/page-spinner");
var page_snackbar_1 = require("./pages/page-snackbar");
var page_tooltip_1 = require("./pages/page-tooltip");
var page_slider_1 = require("./pages/page-slider");
var page_list_1 = require("./pages/page-list");
var page_table_1 = require("./pages/page-table");
var page_grid_1 = require("./pages/page-grid");
var page_badge_1 = require("./pages/page-badge");
var page_card_1 = require("./pages/page-card");
var page_chip_1 = require("./pages/page-chip");
var page_button_1 = require("./pages/page-button");
var page_checkbox_1 = require("./pages/page-checkbox");
var page_radio_1 = require("./pages/page-radio");
var page_toggle_1 = require("./pages/page-toggle");
var page_textfield_1 = require("./pages/page-textfield");
var page_menu_1 = require("./pages/page-menu");
var page_dialog_1 = require("./pages/page-dialog");
var page_selectfield_1 = require("./pages/page-selectfield");
exports.APP_ROUTES = [
    { path: '', component: page_button_1.PageButton, pathMatch: 'full' },
    { path: 'snackbar', component: page_snackbar_1.PageSnackBar },
    { path: 'tooltip', component: page_tooltip_1.PageToolTip },
    { path: 'slider', component: page_slider_1.PageSlider },
    { path: 'grid', component: page_grid_1.PageGrid },
    { path: 'tabs', component: page_tabs_1.PageTabs },
    { path: 'badge', component: page_badge_1.PageBadge },
    { path: 'card', component: page_card_1.PageCard },
    { path: 'chip', component: page_chip_1.PageChip },
    { path: 'list', component: page_list_1.PageList },
    { path: 'progressbar', component: page_progressbar_1.PageProgressBar },
    { path: 'spinner', component: page_spinner_1.PageSpinner },
    { path: 'button', component: page_button_1.PageButton },
    { path: 'checkbox', component: page_checkbox_1.PageCheckbox },
    { path: 'radio', component: page_radio_1.PageRadio },
    { path: 'switch', component: page_switch_1.PageSwitch },
    { path: 'toggle', component: page_toggle_1.PageToggle },
    { path: 'textfield', component: page_textfield_1.PageTextfield },
    { path: 'selectfiled', component: page_selectfield_1.PageSelectfield },
    { path: 'menu', component: page_menu_1.PageMenu },
    { path: 'dialog', component: page_dialog_1.PageDialog },
    { path: 'table', component: page_table_1.PageTable },
    { path: 'selectfield', component: page_selectfield_1.PageSelectfield },
    { path: '**', component: page_button_1.PageButton }
];
//# sourceMappingURL=app.routes.js.map