import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlRippleMod} from "../../ml/components/ripple/mlRippleMod";
import {MlTabsMod} from "../../ml/components/tabs/mlTabsMod";
import {PagTabs} from "./pagTabs";
@NgModule({imports: [MlRippleMod, MlTabsMod,
RouterModule.forChild( [{path: '', component: PagTabs}] )], declarations: [PagTabs]})
export default class PagTabsMod{}