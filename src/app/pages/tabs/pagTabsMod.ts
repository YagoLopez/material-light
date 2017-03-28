import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlRippleMod} from "../../ml/components/ripple/mlRippleMod";
import {MlTabsMod} from "../../ml/components/tabs/mlTabsMod";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagTabs} from "./pagTabs";
@NgModule({imports: [MlRippleMod, MlTabsMod, ViewSourceMod, RouterModule.forChild( [{path: '', component: PagTabs}] )], 
declarations: [PagTabs]}) export class PagTabsMod{}
