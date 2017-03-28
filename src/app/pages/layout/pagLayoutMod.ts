import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagLayout} from "./pagLayout";
@NgModule({
imports: [ViewSourceMod, RouterModule.forChild([{path: '', component: PagLayout}])], declarations: [PagLayout]})
export class PagLayoutMod{}
