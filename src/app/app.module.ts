import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TracksComponent } from './tracks/tracks.component';
import { TracksFormsComponent } from './tracks-forms/tracks-forms.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [AppComponent, TracksComponent, TracksFormsComponent, MapComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
