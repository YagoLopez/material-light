import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlChipMod} from "../../ml/components/chip/mlChipMod";
import {PageChip} from "./pagChip";
@NgModule({imports: [MlChipMod, RouterModule.forChild( [{path: '', component: PageChip}] )], declarations: [PageChip]})
export default class PageChipModule{}