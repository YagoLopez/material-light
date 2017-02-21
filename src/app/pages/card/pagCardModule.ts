import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlCardMod} from "../../ml/components/card/mlCardMod";
import {PagCard} from "./pagCard";

@NgModule({
imports: [MlCardMod, RouterModule.forChild( [{path: '', component: PagCard}] )],
declarations: [PagCard],
})
export default class PagCardModule{}