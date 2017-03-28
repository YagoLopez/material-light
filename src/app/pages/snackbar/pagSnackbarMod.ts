import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {MlSnackbarMod} from "../../ml/components/snackbar/mlSnackbarMod";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagSnackbar} from "./pagSnackbar";
@NgModule({imports: [MlSnackbarMod, MlButtonMod, ViewSourceMod, 
  RouterModule.forChild( [{path: '', component: PagSnackbar}] )], declarations: [PagSnackbar]})
export class PagSnackbarMod{}
