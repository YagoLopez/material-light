import {NgModule} from "@angular/core";
import {MlTableMod} from "../../ml/components/table/mlTableMod";
import {RouterModule} from "@angular/router";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagTable} from "./pagTable";
@NgModule({
imports: [MlTableMod, ViewSourceMod, RouterModule.forChild([{path: '', component: PagTable}])],
declarations: [PagTable]}) export class PagTableMod{}
