import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MlSpinnerMod} from "../spinner/mlSpinnerMod";
import {MlLoaderRouter} from "./mlLoaderRouter";
@NgModule({imports: [CommonModule, MlSpinnerMod], declarations: [MlLoaderRouter], exports: [MlLoaderRouter]})
export class MlLoaderRouterMod{}