import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {pagLayout} from "./pagLayout";
@NgModule({
imports: [ViewSourceMod, RouterModule.forChild([{path: '', component: pagLayout}])], declarations: [pagLayout]})
export default class pagLayoutMod{}
