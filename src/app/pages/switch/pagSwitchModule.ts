import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MlRippleMod} from "../../ml/components/ripple/mlRippleMod";
import {MlSwitchMod} from "../../ml/components/controls/switch/mlSwitchMod";
import {DebugFormMod} from "../../ml/lib/debug_form/debugFormMod";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagSwitch} from "./pagSwitch";
@NgModule({
imports: [MlSwitchMod, MlRippleMod, DebugFormMod, ReactiveFormsModule, ViewSourceMod,
  RouterModule.forChild([{path: '', component: PagSwitch}])], declarations: [PagSwitch]})
export default class PagSwitchModule{}
