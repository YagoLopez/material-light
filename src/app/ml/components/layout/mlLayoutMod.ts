import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MlRippleMod} from "../ripple/mlRippleMod";
import {MlLayout, MlHeader, MlHeaderRow, MlDrawer, MlSpacer, MlNav, MlNavItem, MlLargeScreenOnly, MlSmallScreenOnly,
MlContent, MlHeaderTabs, MlHeaderTab, MlHeaderTabContent, MlHeaderTabActive} from "./mlLayout";

@NgModule({
imports: [CommonModule, MlRippleMod],
declarations: [MlLayout, MlHeader, MlHeaderRow, MlDrawer, MlSpacer, MlNav, MlNavItem, MlLargeScreenOnly,
MlSmallScreenOnly, MlContent, MlHeaderTabs, MlHeaderTab, MlHeaderTabContent, MlHeaderTabActive
],
exports: [MlLayout, MlRippleMod, MlHeader, MlHeaderRow, MlDrawer, MlSpacer, MlNav, MlNavItem, MlLargeScreenOnly,
MlSmallScreenOnly, MlContent, MlHeaderTabs, MlHeaderTab, MlHeaderTabContent, MlHeaderTabActive]
})
export class MlLayoutMod{}