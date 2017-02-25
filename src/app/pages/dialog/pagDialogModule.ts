import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlDialogMod} from "../../ml/components/dialog/mlDialogMod";
import {PagDialog} from "./pagDialog";
@NgModule({imports: [MlDialogMod, RouterModule.forChild([{path: '', component: PagDialog}])],
declarations: [PagDialog]}) export default class PagDialogModule{}