import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlIconMod} from "../../ml/components/icon/mlIconMod";
import {MlBadgeMod} from "../../ml/components/badge/mlBadgeMod";
import {PagBadge} from "./pagBadge";
@NgModule({ imports: [MlIconMod, MlBadgeMod, RouterModule.forChild( [{path: '', component: PagBadge}] )],
declarations: [PagBadge]}) export default class PagBadgeModule{}