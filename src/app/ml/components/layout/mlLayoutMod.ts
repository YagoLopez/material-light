import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MlLayout, MlHeader, MlHeaderRow, MlDrawer, MlSpacer, MlNav, MlNavItem, MlLargeScreenOnly, MlSmallScreenOnly,
MlContent, MlHeaderTabs, MlHeaderTabBar, MlHeaderTabContent, MlHeaderTabActive} from "./mlLayout";

@NgModule({
imports: [CommonModule],
declarations: [MlLayout, MlHeader, MlHeaderRow, MlDrawer, MlSpacer, MlNav, MlNavItem, MlLargeScreenOnly,
MlSmallScreenOnly, MlContent, MlHeaderTabs, MlHeaderTabBar, MlHeaderTabContent, MlHeaderTabActive
],
exports: [MlLayout, MlHeader, MlHeaderRow, MlDrawer, MlSpacer, MlNav, MlNavItem, MlLargeScreenOnly,
MlSmallScreenOnly, MlContent, MlHeaderTabs, MlHeaderTabBar, MlHeaderTabContent, MlHeaderTabActive]
})
export class MlLayoutMod{}