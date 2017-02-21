import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {MlSnackbarMod} from "../../ml/components/snackbar/mlSnackbarMod";
import {PagSnackbar} from "./pagSnackbar";
@NgModule({
  imports: [
    MlSnackbarMod, MlButtonMod,
    RouterModule.forChild( [{path: '', component: PagSnackbar}] )],
    declarations: [PagSnackbar]
})
export default class PagSnackbarModule{}