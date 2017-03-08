import {NgModule} from "@angular/core";
import {MlRippleMod} from "../ripple/mlRippleMod";
import {MlIconMod} from "../icon/mlIconMod";
import {MlList, MlItem, MlItemContent, MlItemAction, MlItemTitle, MlItemIcon, MlItemSubtitle,MlItemDesc} from "./mlList";
@NgModule({
imports: [MlRippleMod, MlIconMod],
declarations: [MlList, MlItem, MlItemContent, MlItemAction, MlItemIcon, MlItemTitle, MlItemSubtitle, MlItemDesc],
exports: [MlRippleMod, MlIconMod, MlList, MlItem, MlItemContent, MlItemAction, MlItemIcon, MlItemTitle,
    MlItemSubtitle, MlItemDesc]})
export class MlListMod{}