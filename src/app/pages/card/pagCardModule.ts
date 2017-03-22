import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlCardMod} from "../../ml/components/card/mlCardMod";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {MlMenuMod} from "../../ml/components/menu/mlMenuMod";
import {PagCard} from "./pagCard";
@NgModule({
imports: [MlButtonMod, MlMenuMod, MlCardMod, RouterModule.forChild( [{path: '', component: PagCard}] )],
declarations: [PagCard]})
export default class PagCardModule{}