import {NgModule} from "@angular/core";
import {MlMenuMod} from "../../ml/components/menu/mlMenuMod";
import {RouterModule} from "@angular/router";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PageMenu} from "./pagMenu";
@NgModule({
imports: [MlMenuMod, ViewSourceMod, RouterModule.forChild([{path: '', component: PageMenu}])],
declarations: [PageMenu]}) export class PagMenuMod{}
