import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MlRippleMod} from "../ripple/mlRippleMod";
import {MlTitleMod} from "../title/mlTitleMod";
import {MlLayout, MlHeader, MlHeaderRow, MlDrawer, MlSpacer, MlNav, MlNavItem, MlLargeScreenOnly, MlSmallScreenOnly,
MlContent, MlHeaderTabs, MlHeaderTab, MlHeaderTabContent, MlHeaderTabActive} from "./mlLayout";

@NgModule({
imports: [CommonModule, MlRippleMod, MlTitleMod],
declarations: [MlLayout, MlHeader, MlHeaderRow, MlDrawer, MlSpacer, MlNav, MlNavItem, MlLargeScreenOnly,
MlSmallScreenOnly, MlContent, MlHeaderTabs, MlHeaderTab, MlHeaderTabContent, MlHeaderTabActive
],
exports: [MlRippleMod, MlTitleMod, MlLayout, MlHeader, MlHeaderRow, MlDrawer, MlSpacer, MlNav, MlNavItem, MlLargeScreenOnly,
MlSmallScreenOnly, MlContent, MlHeaderTabs, MlHeaderTab, MlHeaderTabContent, MlHeaderTabActive]
})
export class MlLayoutMod{}