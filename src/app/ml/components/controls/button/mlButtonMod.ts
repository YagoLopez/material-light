import {NgModule} from "@angular/core";
import {MlButton} from "./mlButton";
import {MlButtonSubmit} from "./mlButtonSubmit";
import {MlIconMod} from "../../icon/mlIconMod";
@NgModule({
imports: [MlIconMod],
declarations: [MlButton, MlButtonSubmit], exports: [MlButton, MlButtonSubmit]})
export class MlButtonMod{}