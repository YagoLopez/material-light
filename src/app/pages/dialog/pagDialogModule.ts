import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {MlDialogMod} from "../../ml/components/dialog/mlDialogMod";
import {PagDialog} from "./pagDialog";
@NgModule({
imports: [MlButtonMod, MlDialogMod, RouterModule.forChild([{path: '', component: PagDialog}])],
declarations: [PagDialog]})
export default class PagDialogModule{}