import {NgModule} from "@angular/core";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {RouterModule} from "@angular/router";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagButton} from "./pagButton";
@NgModule({
imports: [MlButtonMod, ViewSourceMod, RouterModule.forChild( [{path: '', component: PagButton}] )],
declarations: [PagButton]}) export default class PagButtonModule{}
