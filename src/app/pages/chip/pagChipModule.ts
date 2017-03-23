import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlChipMod} from "../../ml/components/chip/mlChipMod";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PageChip} from "./pagChip";
@NgModule({imports: [MlChipMod, ViewSourceMod, RouterModule.forChild( [{path: '', component: PageChip}] )],
  declarations: [PageChip]}) export default class PageChipModule{}
