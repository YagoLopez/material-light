import {NgModule} from "@angular/core";
import {MlTableMod} from "../../ml/components/table/mlTableMod";
import {RouterModule} from "@angular/router";
import {PagTable} from "./pagTable";
@NgModule({
imports: [MlTableMod, RouterModule.forChild([{path: '', component: PagTable}])],
declarations: [PagTable]})
export default class PagTableModule{}