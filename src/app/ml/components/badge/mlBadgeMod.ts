import {NgModule} from "@angular/core";
import {MlBadge} from "./mlBadge";
import {MlIconMod} from "../icon/mlIconMod";
@NgModule({imports: [MlIconMod], declarations: [MlBadge], exports: [MlIconMod, MlBadge]}) export class MlBadgeMod{}
