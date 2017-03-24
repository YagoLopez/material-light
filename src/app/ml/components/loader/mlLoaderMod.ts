import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MlSpinnerMod} from "../spinner/mlSpinnerMod";
import {MlLoader} from "./mlLoader";
@NgModule({imports: [CommonModule, MlSpinnerMod], declarations: [MlLoader], exports: [MlLoader]}) export class MlLoaderMod{}
