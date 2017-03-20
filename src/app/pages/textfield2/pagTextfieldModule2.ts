import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {MlIconMod} from "../../ml/components/icon/mlIconMod";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {MlValidationErrorMod} from "../../ml/components/controls/error/mlValidationErrorMod";
import {DebugFormMod} from "../../ml/lib/debug_form/debugFormMod";
import {MlTextfieldMod} from "../../ml/components/controls/textfield/mlTextfieldMod";
import {PagTextfield} from "./pagTextfield2";
@NgModule({
imports: [MlIconMod, MlValidationErrorMod, MlButtonMod, DebugFormMod, FormsModule, ReactiveFormsModule, MlTextfieldMod,
RouterModule.forChild([{path: '', component: PagTextfield}])],
declarations: [PagTextfield]})
export default class PagTextfieldModule{}