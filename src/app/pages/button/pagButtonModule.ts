import {NgModule} from "@angular/core";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {RouterModule} from "@angular/router";
import {PagButton} from "./pagButton";
@NgModule({
imports: [MlButtonMod, RouterModule.forChild( [{path: '', component: PagButton}] )],
declarations: [PagButton]}) export default class PagButtonModule{}
