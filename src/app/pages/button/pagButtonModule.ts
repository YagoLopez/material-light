import {NgModule} from "@angular/core";
import {MlRippleMod} from "../../ml/components/ripple/mlRippleMod";
import {MlIconMod} from "../../ml/components/icon/mlIconMod";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {RouterModule} from "@angular/router";
import {PagButton} from "./pagButton";

@NgModule({
imports: [MlIconMod, MlRippleMod, MlButtonMod, RouterModule.forChild( [{path: '', component: PagButton}] )],
declarations: [PagButton]
})
export default class PagButtonModule{}