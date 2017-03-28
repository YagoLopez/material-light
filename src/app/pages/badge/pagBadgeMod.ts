import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlBadgeMod} from "../../ml/components/badge/mlBadgeMod";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagBadge} from "./pagBadge";
@NgModule({imports: [MlBadgeMod, ViewSourceMod, RouterModule.forChild( [{path: '', component: PagBadge}] )],
declarations: [PagBadge]}) export class PagBadgeMod{}
