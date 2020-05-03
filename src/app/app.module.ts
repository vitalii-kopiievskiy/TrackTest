import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AgmCoreModule } from "@agm/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { AppComponent } from "./app.component";
import { TracksComponent } from "./tracks/tracks.component";
import { TracksFormsComponent } from "./tracks-forms/tracks-forms.component";
import { MapComponent } from "./map/map.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { DialogTrackAddComponent } from "./dialog-track-add/dialog-track-add.component";

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    TracksFormsComponent,
    MapComponent,
    DialogTrackAddComponent,
  ],
  entryComponents: [DialogTrackAddComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCDW00wd4VXgnZBcUrO4fmO0oXp0kVHK6g",
    }),
    NoopAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
