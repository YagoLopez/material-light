import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {MlSliderMod} from "../../ml/components/controls/slider/mlSliderMod";
import {PagSlider} from "./pagSlider";
@NgModule({
imports: [MlButtonMod, MlSliderMod, RouterModule.forChild([{path: '', component: PagSlider}])],
declarations: [PagSlider]
})
export default class PagSliderModule{}