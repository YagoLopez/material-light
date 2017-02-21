//todo: ripple effect applied incorrectly

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MlSwitchMod} from "../../ml/components/controls/switch/mlSwitchMod";
import {DebugFormMod} from "../../ml/lib/debug_form/debugFormMod";
import {PagSwitch} from "./pagSwitch";
@NgModule({
imports: [MlSwitchMod, DebugFormMod, ReactiveFormsModule, RouterModule.forChild([{path: '', component: PagSwitch}])],
declarations: [PagSwitch]})
export default class PagSwitchModule{}