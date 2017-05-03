import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MlSelectfieldMod} from "../../ml/components/controls/selectfield/mlSelectfieldMod";
import {MlValidationErrorMod} from "../../ml/components/controls/error/mlValidationErrorMod";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {DebugFormMod} from "../../ml/lib/debug_form/debugFormMod";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagSelectfield} from "./pagSelectfield";
@NgModule({
imports: [ReactiveFormsModule, DebugFormMod, MlButtonMod, MlValidationErrorMod, MlSelectfieldMod, ViewSourceMod,
RouterModule.forChild([{path: '', component: PagSelectfield}])], declarations: [PagSelectfield]})
export class PagSelectfieldMod{}
