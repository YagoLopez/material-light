import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {MlSliderMod} from "../../ml/components/controls/slider/mlSliderMod";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagSlider} from "./pagSlider";
@NgModule({
imports: [MlButtonMod, MlSliderMod, ViewSourceMod, RouterModule.forChild([{path: '', component: PagSlider}])],
declarations: [PagSlider]}) export class PagSliderMod{}
