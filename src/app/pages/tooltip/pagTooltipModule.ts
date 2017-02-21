import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlTooltipMod} from "../../ml/components/tooltip/mlTooltipMod";
import {PagTooltip} from "./pagTooltip";
@NgModule({
imports: [MlTooltipMod, RouterModule.forChild([{path: '', component: PagTooltip}])],
declarations: [PagTooltip]
})
export default class PagTooltipModule{}