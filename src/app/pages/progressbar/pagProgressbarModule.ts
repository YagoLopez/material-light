import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {MlProgressbarMod} from "../../ml/components/progressbar/mlPgrogressbarMod";
import {PagProgressar} from "./pagProgressbar";
@NgModule({
imports: [MlButtonMod, MlProgressbarMod, RouterModule.forChild([{path: '', component: PagProgressar}])],
declarations: [PagProgressar]})
export default class PagProgressbarModule{}