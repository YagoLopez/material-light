import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlDialogMod} from "../../ml/components/dialog/mlDialogMod";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagDialog} from "./pagDialog";
@NgModule({imports: [MlDialogMod, ViewSourceMod, RouterModule.forChild([{path: '', component: PagDialog}])],
declarations: [PagDialog]}) export class PagDialogMod{}
