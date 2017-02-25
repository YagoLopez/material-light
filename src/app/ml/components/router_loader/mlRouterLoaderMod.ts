import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MlSpinnerMod} from "../spinner/mlSpinnerMod";
import {MlRouterLoader} from "./mlRouterLoader";
@NgModule({imports: [CommonModule, MlSpinnerMod], declarations: [MlRouterLoader], exports: [MlSpinnerMod, MlRouterLoader]
}) export class MlRouterLoaderMod{}