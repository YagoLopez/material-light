import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlListMod} from "../../ml/components/list/mlListMod";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagList} from "./pagList";
@NgModule({imports: [MlListMod, ViewSourceMod, RouterModule.forChild([{path: '', component: PagList}])],
declarations: [PagList]}) export default class PagListModule{}
