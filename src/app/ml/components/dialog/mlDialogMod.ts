import {NgModule} from "@angular/core";
import {MlDialogTitle, MlDialog, MlDialogContent, MlDialogActions} from "./mlDialog";
@NgModule({
declarations: [MlDialog, MlDialogTitle, MlDialogContent, MlDialogActions],
exports: [MlDialog, MlDialogTitle, MlDialogContent, MlDialogActions]})
export class MlDialogMod{}