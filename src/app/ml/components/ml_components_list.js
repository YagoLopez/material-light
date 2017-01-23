"use strict";
// MlLayout
var ml_layout_1 = require("./layout/ml_layout");
var ml_layout_2 = require("./layout/ml_layout");
var ml_layout_3 = require("./layout/ml_layout");
var ml_layout_4 = require("./layout/ml_layout");
var ml_layout_5 = require("./layout/ml_layout");
var ml_layout_6 = require("./layout/ml_layout");
var ml_layout_7 = require("./layout/ml_layout");
var ml_layout_8 = require("./layout/ml_layout");
var ml_layout_9 = require("./layout/ml_layout");
var ml_layout_10 = require("./layout/ml_layout");
var ml_layout_11 = require("./layout/ml_layout");
var ml_layout_12 = require("./layout/ml_layout");
var ml_layout_13 = require("./layout/ml_layout");
var ml_layout_14 = require("./layout/ml_layout");
// MlTabs
var ml_tabs_1 = require("./tabs/ml_tabs");
var ml_tabs_2 = require("./tabs/ml_tabs");
var ml_tabs_3 = require("./tabs/ml_tabs");
var ml_tabs_4 = require("./tabs/ml_tabs");
// -------
var ml_ripple_1 = require("./ripple/ml_ripple");
var ml_badge_1 = require("./badge/ml_badge");
var ml_button_1 = require("./controls/button/ml_button");
// MlDialog
var ml_dialog_1 = require("./dialog/ml_dialog");
var ml_dialog_2 = require("./dialog/ml_dialog");
var ml_dialog_3 = require("./dialog/ml_dialog");
var ml_dialog_4 = require("./dialog/ml_dialog");
// MlTextfield
var ml_textfield_1 = require("./controls/textfield/ml_textfield");
var ml_textfield_expand_1 = require("./controls/textfield/ml_textfield_expand");
var ml_textfield_area_1 = require("./controls/textfield/ml_textfield_area");
var ml_textfield_label_1 = require("./controls/textfield/ml_textfield_label");
// ------------
var ml_checkbox_1 = require("./controls/checkbox/ml_checkbox");
var ml_radio_1 = require("./controls/radio/ml_radio");
var ml_icon_1 = require("./icon/ml_icon");
var ml_title_1 = require("./title/ml_title");
var ml_switch_1 = require("./controls/switch/ml_switch");
var ml_progressbar_1 = require("./progressbar/ml_progressbar");
var ml_grid_1 = require("./grid/ml_grid");
var ml_grid_2 = require("./grid/ml_grid");
var ml_spinner_1 = require("./spinner/ml_spinner");
var ml_snackbar_1 = require("./snackbar/ml_snackbar");
var ml_tooltip_1 = require("./tooltip/ml_tooltip");
var ml_chip_1 = require("./chip/ml_chip");
var ml_slider_1 = require("./controls/slider/ml_slider");
// MlList
var ml_list_1 = require("./list/ml_list");
var ml_list_2 = require("./list/ml_list");
var ml_list_3 = require("./list/ml_list");
var ml_list_4 = require("./list/ml_list");
var ml_list_5 = require("./list/ml_list");
var ml_list_6 = require("./list/ml_list");
var ml_list_7 = require("./list/ml_list");
var ml_list_8 = require("./list/ml_list");
// MlTable
var ml_table_1 = require("./table/ml_table");
var ml_table_2 = require("./table/ml_table");
// MlCard
var ml_card_1 = require("./card/ml_card");
var ml_card_2 = require("./card/ml_card");
var ml_card_3 = require("./card/ml_card");
var ml_card_4 = require("./card/ml_card");
var ml_card_5 = require("./card/ml_card");
var ml_card_6 = require("./card/ml_card");
// -------
var ml_toggle_1 = require("./controls/toggle/ml_toggle");
var ml_error_1 = require("./controls/error/ml_error");
var ml_button_submit_1 = require("./controls/button/ml_button_submit");
var ml_menu_1 = require("./menu/ml_menu");
var ml_menu_2 = require("./menu/ml_menu");
var ml_chip_button_1 = require("./chip/ml_chip_button");
var debug_form_1 = require("../lib/debug_form/debug_form");
exports.MlComponentsList = [
    // Layout
    ml_layout_1.MlLayout,
    ml_layout_2.MlHeader,
    ml_layout_3.MlHeaderRow,
    ml_layout_4.MlDrawer,
    ml_layout_5.MlSpacer,
    ml_layout_6.MlNav,
    ml_layout_7.MlNavItem,
    ml_layout_8.MlLargeScreenOnly,
    ml_layout_9.MlSmallScreenOnly,
    ml_layout_10.MlContent,
    ml_layout_11.MlHeaderTabs,
    ml_layout_12.MlHeaderTabBar,
    ml_layout_13.MlHeaderTabContent,
    ml_layout_14.MlHeaderTabActive,
    // Tabs
    ml_tabs_1.MlTabs,
    ml_tabs_2.MlTabsBar,
    ml_tabs_3.MlTab,
    ml_tabs_4.MlTabPanel,
    // ---------
    ml_ripple_1.MlRipple,
    ml_badge_1.MlBadge,
    ml_button_1.MlButton,
    ml_button_submit_1.MlButtonSubmit,
    // Dialog
    ml_dialog_1.MlDialog,
    ml_dialog_2.MlDialogTitle,
    ml_dialog_3.MlDialogContent,
    ml_dialog_4.MlDialogActions,
    // -----------
    ml_menu_1.MlMenu,
    ml_menu_2.MlMenuItem,
    ml_textfield_1.MlTextfield,
    ml_textfield_expand_1.MlTextfieldExpand,
    ml_textfield_area_1.MlTextfieldArea,
    ml_textfield_label_1.MlTextfieldLabel,
    ml_checkbox_1.MlCheckbox,
    ml_radio_1.MlRadio,
    ml_icon_1.MlIcon,
    ml_title_1.MlTitle,
    ml_grid_1.MlGrid,
    ml_grid_2.MlCell,
    ml_switch_1.MlSwitch,
    ml_progressbar_1.MlProgressBar,
    ml_spinner_1.MlSpinner,
    ml_snackbar_1.MlSnackBar,
    ml_tooltip_1.MlToolTip,
    ml_slider_1.MlSlider,
    // List ---
    ml_list_1.MlList,
    ml_list_2.MlItem,
    ml_list_3.MlItemContent,
    ml_list_4.MlItemAction,
    ml_list_5.MlItemIcon,
    ml_list_6.MlItemTitle,
    ml_list_7.MlItemSubtitle,
    ml_list_8.MlItemDesc,
    // Table
    ml_table_1.MlTable,
    ml_table_2.MlTableTextCell,
    // Card
    ml_card_1.MlCard,
    ml_card_2.MlCardTitle,
    ml_card_3.MlCardSubtitle,
    ml_card_4.MlCardMedia,
    ml_card_5.MlCardText,
    ml_card_6.MlCardActions,
    // ---------
    ml_toggle_1.MlToggle,
    ml_error_1.MlValidatorError,
    ml_chip_1.MlChip,
    ml_chip_button_1.MlChipButton,
    debug_form_1.DebugForm
];
//# sourceMappingURL=ml_components_list.js.map