import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";


@NgModule({
	bootstrap: [AppComponent],
	imports: [NativeScriptModule, AppRoutingModule],
	declarations: [AppComponent],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
