import {NgModule} from "@angular/core";
import {MlRippleMod} from "../../ripple/mlRippleMod";
import {MlIconMod} from "../../icon/mlIconMod";
import {MlButton} from "./mlButton";
import {MlButtonSubmit} from "./mlButtonSubmit";
@NgModule({
imports: [MlRippleMod, MlIconMod],
declarations: [MlButton, MlButtonSubmit],
exports: [MlRippleMod, MlIconMod, MlButton, MlButtonSubmit]})
export class MlButtonMod{}