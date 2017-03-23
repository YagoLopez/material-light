import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {MlProgressbarMod} from "../../ml/components/progressbar/mlPgrogressbarMod";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagProgressar} from "./pagProgressbar";
@NgModule({
imports: [MlButtonMod, MlProgressbarMod, ViewSourceMod, RouterModule.forChild([{path: '', component: PagProgressar}])],
declarations: [PagProgressar]})
export default class PagProgressbarModule{}
