import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {MlIconMod} from "../../ml/components/icon/mlIconMod";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {MlValidationErrorMod} from "../../ml/components/controls/error/mlValidationErrorMod";
import {DebugFormMod} from "../../ml/lib/debug_form/debugFormMod";
import {MlTextfieldMod} from "../../ml/components/controls/textfield/mlTextfieldMod";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagTextfield} from "./pagTextfield";
@NgModule({
imports: [MlIconMod, MlValidationErrorMod, MlButtonMod, DebugFormMod, FormsModule, ReactiveFormsModule, MlTextfieldMod,
ViewSourceMod, RouterModule.forChild([{path: '', component: PagTextfield}])], declarations: [PagTextfield]})
export class PagTextfieldMod{}
