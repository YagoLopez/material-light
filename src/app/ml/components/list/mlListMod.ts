import {NgModule} from "@angular/core";
import {MlList, MlItem, MlItemContent, MlItemAction, MlItemTitle, MlItemIcon, MlItemSubtitle,MlItemDesc} from "./mlList";
@NgModule({
declarations: [MlList, MlItem, MlItemContent, MlItemAction, MlItemIcon, MlItemTitle, MlItemSubtitle, MlItemDesc],
exports: [MlList, MlItem, MlItemContent, MlItemAction, MlItemIcon, MlItemTitle, MlItemSubtitle, MlItemDesc]})
export class MlListMod{}