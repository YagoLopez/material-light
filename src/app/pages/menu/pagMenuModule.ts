import {NgModule} from "@angular/core";
import {MlRippleMod} from "../../ml/components/ripple/mlRippleMod";
import {MlIconMod} from "../../ml/components/icon/mlIconMod";
import {MlMenuMod} from "../../ml/components/menu/mlMenuMod";
import {RouterModule} from "@angular/router";
import {PageMenu} from "./pagMenu";
@NgModule({
imports: [MlIconMod, MlRippleMod, MlMenuMod, RouterModule.forChild([{path: '', component: PageMenu}])],
declarations: [PageMenu]
})
export default class PagMenuModule{}