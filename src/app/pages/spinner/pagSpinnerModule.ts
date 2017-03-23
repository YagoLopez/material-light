import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {MlSpinnerMod} from "../../ml/components/spinner/mlSpinnerMod";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagSpinner} from "./pagSpinner";
@NgModule({
imports: [MlButtonMod, MlSpinnerMod, ViewSourceMod, RouterModule.forChild([{path: '', component: PagSpinner}])],
declarations: [PagSpinner]}) export default class PagSpinnerModule{}
