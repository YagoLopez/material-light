import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MlModule} from "./ml/ml_module";
import {AppRoot} from "./app.root";
import {AppPages} from "./pages/app.pages.list";
import {APP_ROUTES} from "./app.routes";

@NgModule({

  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {useHash: true}),
    FormsModule,
    ReactiveFormsModule,
    MlModule
  ],

  declarations: [
    AppRoot,
    AppPages,
  ],

  bootstrap: [AppRoot]

})
export class AppModule {}