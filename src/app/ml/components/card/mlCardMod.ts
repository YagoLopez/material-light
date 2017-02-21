import {NgModule} from "@angular/core";
import {MlCard, MlCardTitle, MlCardSubtitle, MlCardMedia, MlCardText, MlCardActions} from "./mlCard";
@NgModule({
declarations: [MlCard, MlCardTitle, MlCardSubtitle, MlCardMedia, MlCardText, MlCardActions],
exports: [MlCard, MlCardTitle, MlCardSubtitle, MlCardMedia, MlCardText, MlCardActions]
})
export class MlCardMod{}