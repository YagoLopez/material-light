import {NgModule} from "@angular/core";
import {MlMenuMod} from "../../ml/components/menu/mlMenuMod";
import {RouterModule} from "@angular/router";
import {PageMenu} from "./pagMenu";
@NgModule({
imports: [MlMenuMod, RouterModule.forChild([{path: '', component: PageMenu}])],
declarations: [PageMenu]
})
export default class PagMenuModule{}