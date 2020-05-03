import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AgmCoreModule } from "@agm/core";
import { MatDialogModule } from "@angular/material/dialog";

import { AppComponent } from "./app.component";
import { TracksComponent } from "./tracks/tracks.component";
import { TracksFormsComponent } from "./tracks-forms/tracks-forms.component";
import { MapComponent } from "./map/map.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    TracksFormsComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCDW00wd4VXgnZBcUrO4fmO0oXp0kVHK6g",
    }),
    NoopAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
