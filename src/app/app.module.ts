import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MlModule} from "./ml/ml_module";
import {App} from "./app";
import {PagesList} from "./pages/pages-list";
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
    App,
    PagesList,
  ],

  bootstrap: [App]

})
export class AppModule {}