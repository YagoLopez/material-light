import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlChipMod} from "../../ml/components/chip/mlChipMod";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagChip} from "./pagChip";
@NgModule({imports: [MlChipMod, ViewSourceMod, RouterModule.forChild( [{path: '', component: PagChip}] )],
  declarations: [PagChip]}) export class PagChipMod{}
