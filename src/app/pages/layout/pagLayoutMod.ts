import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {MlRadioMod} from "../../ml/components/controls/radio/mlRadioMod";
import {PagLayout} from "./pagLayout";
@NgModule({ imports: [MlRadioMod, ViewSourceMod, RouterModule.forChild([{path: '', component: PagLayout}])],
declarations: [PagLayout]})
export class PagLayoutMod{}
