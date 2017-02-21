import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlGridMod} from "../../ml/components/grid/mlGridMod";
import {PagGrid} from "./pagGrid";
@NgModule({imports: [MlGridMod, RouterModule.forChild( [{path: '', component: PagGrid}] )], declarations: [PagGrid]})
export default class PagGridModule{}