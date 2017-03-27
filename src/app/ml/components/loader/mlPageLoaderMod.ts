import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MlSpinnerMod} from "../spinner/mlSpinnerMod";
import {MlPageLoader} from "./mlPageLoader";
@NgModule({imports: [CommonModule, MlSpinnerMod], declarations: [MlPageLoader], exports: [MlPageLoader]})
export class MlPageLoaderMod{}
