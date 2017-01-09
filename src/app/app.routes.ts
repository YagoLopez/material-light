import {PageTabs} from "./pages/page-tabs";
import {PageSwitch} from "./pages/page-switch";
import {PageProgressBar} from "./pages/page-progressbar";
import {PageSpinner} from "./pages/page-spinner";
import {PageSnackBar} from "./pages/page-snackbar";
import {PageToolTip} from "./pages/page-tooltip";
import {PageSlider} from "./pages/page-slider";
import {PageList} from "./pages/page-list";
import {PageTable} from "./pages/page-table";
import {PageGrid} from "./pages/page-grid";
import {PageBadge} from "./pages/page-badge";
import {PageCard} from "./pages/page-card";
import {PageChip} from "./pages/page-chip";
import {PageButton} from "./pages/page-button";
import {PageCheckbox} from "./pages/page-checkbox";
import {PageRadio} from "./pages/page-radio";
import {PageToggle} from "./pages/page-toggle";
import {PageTextfield} from "./pages/page-textfield";
import {PageMenu} from "./pages/page-menu";
import {PageDialog} from "./pages/page-dialog";

export const APP_ROUTES = [

{ path: '',             component: PageRadio, pathMatch: 'full' },
{ path: 'snackbar',     component: PageSnackBar },
{ path: 'tooltip',      component: PageToolTip },
{ path: 'slider',       component: PageSlider },
{ path: 'grid',         component: PageGrid },
{ path: 'tabs',         component: PageTabs },
{ path: 'badge',        component: PageBadge },
{ path: 'card',         component: PageCard },
{ path: 'chip',         component: PageChip },
{ path: 'list',         component: PageList },
{ path: 'progressbar',  component: PageProgressBar },
{ path: 'spinner',      component: PageSpinner },
{ path: 'button',       component: PageButton },
{ path: 'checkbox',     component: PageCheckbox },
{ path: 'radio',        component: PageRadio },
{ path: 'switch',       component: PageSwitch },
{ path: 'toggle',       component: PageToggle },
{ path: 'textfield',    component: PageTextfield },
{ path: 'menu',         component: PageMenu },
{ path: 'dialog',       component: PageDialog },
{ path: 'table',        component: PageTable }

];